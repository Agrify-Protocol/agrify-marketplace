import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import countryList from "@/components/CountryModal/countryList.json";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import { validateNumberInput } from "@/utils/validationSchema";
import { createProductRequest } from "@/services/api/projects";
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
    phoneNumber: {
      label: "Phone Number",
      type: "tel",
    },
    deliveryLocation: {
      label: "Delivery Location",
      type: "text",
    },
    annualBudget: {
      label: "Annual produce purchase spend",
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
  const [selectedCountry, setSelectedCountry] = useState<Record<string, any>>(
    countryList[0]
  );
  const [form, setForm] = useState<Record<string, any>>({
    produceName: id ? formatSnakeCaseTitle(id) : "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [validatedInfo, setValidatedInfo] = useState<Record<string, any>>({});

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const router = useRouter();

  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  const handleChangeInput = (e: any) => {
    const { id, value } = e.target;
    if (["sizeTons", "phoneNumber"].includes(id)) {
      setValidatedInfo((prev) => ({
        ...prev,
        [id]: validateNumberInput(value),
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

  const handleCreateProductRequest = async () => {
    const {
      idd: { root, suffixes },
    } = selectedCountry;
    const modifiedObj = {
      ...form,
      phoneNumber: `${root}${[...suffixes]}${form.phoneNumber}`,
      preferences: OPTIONS.reduce<Record<string, boolean>>((acc, key) => {
        acc[key] = form.preferences.includes(key);
        return acc;
      }, {}),
    };
    if (!!isLoggedIn) {
      setIsLoading(true);
      const res = await createProductRequest(modifiedObj, toast);
      if (res?.message) {
        setIsLoading(false);
        router.push("/marketplace/sourcing-tool/success");
        localStorage.removeItem("sourcing_tool_form");
      }
    } else {
      localStorage.setItem("sourcing_tool_form", JSON.stringify(modifiedObj));
      router.push(`/auth/login?sourcing-tool=${id}`);
    }
  };
  return {
    form,
    handleChangeInput,
    validatedInfo,
    setForm,
    setIsModalOpen,
    selectedCountry,
    setAccessToken,
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
