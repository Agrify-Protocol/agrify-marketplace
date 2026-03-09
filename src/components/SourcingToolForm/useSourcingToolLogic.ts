import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import countryList from "@/components/CountryModal/countryList.json";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import {
  validateEmail,
  validateNameInput,
  validateNumberInput,
} from "@/utils/validationSchema";
import { createProductRequest } from "@/services/api/projects";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useMutation } from "@tanstack/react-query";
import "./index.css";

const useSourcingToolLogic = (id: string | null) => {
  const OPTIONS = [
    "traceability",
    "regenerativePractices",
    "escrowSecured",
    "labTested",
  ];

  const FIELDS = {
    produceName: {
      label: "Produce Name",
      type: "text",
    },
    sizeTons: {
      label: "Size (in tons)",
      type: "text",
    },
    fullname: {
      label: "Full Name",
      type: "text",
    },
    phoneNumber: {
      label: "Phone Number",
      type: "tel",
    },
    email: {
      label: "Email",
      type: "email",
    },
    deliveryLocation: {
      label: "Delivery Location",
      type: "select",
      options: countryList.map((item) => item.name.common),
    },
    annualBudget: {
      label: "Annual produce purchase budget",
      type: "select",
      options: [
        "Less than $10,000",
        "$10,000 – $50,000",
        "$50,001 – $100,000",
        "Over $100,000",
      ],
    },
    preferences: {
      label: "Do any of these matter to you? Select the ones that apply",
      type: "radio",
      options: [
        {
          value: "traceability",
          label: "Traceability of produce to the farm it came from",
        },
        {
          value: "regenerativePractices",
          label: "Regenerative farming practices verified",
        },
        { value: "labTested", label: "Lab-tested with compliance certificate" },
        {
          value: "escrowSecured",
          label: "Secured payment and delivery through escrow",
        },
      ],
    },
  };

  const toast = useToast();
  const { accessToken } = useAuthContext();
  const { setPendingSourcingForm } = useGlobalContext();
  const [selectedCountry, setSelectedCountry] = useState<Record<string, any>>(
    countryList[0],
  );
  const [form, setForm] = useState<Record<string, any>>({
    produceName: id ? formatSnakeCaseTitle(id) : "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [validatedInfo, setValidatedInfo] = useState<Record<string, any>>({});

  const router = useRouter();

  const handleChangeInput = (e: any) => {
    const { id, value } = e.target;
    const getValidateFn = (value: string) => {
      switch (true) {
        case ["sizeTons", "phoneNumber"].includes(id):
          return validateNumberInput(value);
        case id === "email":
          return validateEmail(value);
        case id === "name":
          return validateNameInput(value);
        default:
          break;
      }
    };
    if (["sizeTons", "phoneNumber", "email", "name"].includes(id)) {
      setValidatedInfo((prev) => ({
        ...prev,
        [id]: getValidateFn(value),
      }));
    }
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const isDisabled =
    [
      "produceName",
      "annualBudget",
      "deliveryLocation",
      "phoneNumber",
      "sizeTons",
    ].some((key) => form[key] === "" || form[key] === undefined) ||
    Object.values(validatedInfo).some((item) => item === false);

  const { mutateAsync, isPending: isLoading } = useMutation({
    mutationFn: (payload: Record<string, any>) =>
      createProductRequest(payload, toast),
  });

  const handleCreateProductRequest = async () => {
    const {
      idd: { root, suffixes },
    } = selectedCountry;

    const modifiedObj = {
      ...form,
      phoneNumber: `${root}${suffixes.join("")}${form.phoneNumber}`,
      preferences: OPTIONS.reduce<Record<string, boolean>>((acc, key) => {
        acc[key] = form.preferences.includes(key);
        return acc;
      }, {}),
    };

    if (!accessToken) {
      setPendingSourcingForm(modifiedObj);
      router.push("/auth/login?sourcing-tool=true");
      return;
    }

    const res = await mutateAsync(modifiedObj);

    if (res?.message) {
      router.push("/home/sourcing-tool/success");
    }
  };

  return {
    form,
    handleChangeInput,
    validatedInfo,
    setForm,
    setIsModalOpen,
    selectedCountry,
    fields: FIELDS,
    isDisabled,
    OPTIONS,
    handleCreateProductRequest,
    isLoading,
    isModalOpen,
    setSelectedCountry,
  };
};

export default useSourcingToolLogic;
