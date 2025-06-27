"use client";

import React from "react";
import { ProjectPageProvider } from "@/context/ProjectsPageContext/ProjectsPageContext";
import ProduceDetails from "@/components/ProfilePageComponents/ProduceDetails/page";
import { mockDetails } from "./constants";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useRouter } from "next/navigation";

const ProjectPage = () => {
  const { setChosenProject } = useGlobalContext();
  const router = useRouter();

  return (
    <ProjectPageProvider>
      <ProduceDetails
        details={{
          ...mockDetails,
          _id: "67e071ec582a16b12774dfa1",
          projectId: "85931158",
          title: "Lagos Cassava Farmers Collective",
          about:
            "This initiative unites a network of smallholder cassava farmers from across Lagos State, all committed to producing high-quality cassava using sustainable agricultural methods. By joining forces, these farmers can streamline distribution, negotiate better prices, and ensure consistent quality for buyers. Whether you’re a local food processor, distributor, or retailer, purchasing through this collective supports the livelihoods of local farmers and contributes to a more resilient food supply chain in Nigeria.\n",
          description:
            "The purpose of the project activity was substituting sulphur hexafluoride (SF6), a high global warming potential (GWP) gas, with a non-global warming sulphur dioxide (SO2) gas at RIMA magnesium factory.",
          mission:
            "The maximum electrical on-site demand in 2000 was 1034 kW, which is expected to increase to 1200 kW by 2002. The supply of power is somewhat unreliable and the price is highly dependent on the world price of oil. Grupo Gemina is interested in building a biomass power plant to cover on-site electricity demand and to sell the excess electricity",
          methodology: "Multi-Species Agroforrestry AGM001",
          tags: [],
          images: [
            {
              image:
                "https://res.cloudinary.com/isaacoduh/image/upload/v1742762473/v3me95q7qhzsf7e4spu4.jpg",
              _id: "67e071ec582a16b12774dfa2",
            },
            {
              image:
                "https://res.cloudinary.com/isaacoduh/image/upload/v1742762473/v3me95q7qhzsf7e4spu4.jpg",
              _id: "67e071ec582a16b12774dfa3",
            },
          ],
          coverImage:
            "https://res.cloudinary.com/isaacoduh/image/upload/v1742762474/fncqvzuetgqyxwv5n1uc.webp",
          location: "Lagos, Nigeria",
          latitude: 7.04994,
          longitude: 3.60478,
          state: "Lagos",
          country: "Nigeria",
          category: "cassava",
          creditStartDate: "2025-06-29T00:00:00.000Z",
          creditEndDate: "2025-08-30T00:00:00.000Z",
          supportingDocument:
            "https://res.cloudinary.com/isaacoduh/image/upload/v1742762475/kdyqjl1ssqd5eehfxitl.pdf",
          contractType: "Escrow Based Agreement",
          projectToken: {
            tokenId: "0.0.4690953",
            projectId: "85931158",
            tokenName: "Lagos Cassava Farmers Collective",
            tokenSymbol: "AGT",
            tokenOwner: "67dd60f9391f9d5c41e3d0bc",
            projectFarmers: [],
            totalTonnes: 1000,
            availableTonnes: 600,
            minimumPurchaseTonnes: 1,
            price: 0.59,
          },
          farms: [
            {
              _id: "67dd88a7391f9d5c41e3d190",
              name: "Demi's Farm",
              country: "Nigeria",
              state: "Lagos",
              farmImages: [
                {
                  image:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1742571686/hb0gvyljyyvy13yybjt6.webp",
                },
                {
                  image:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1742571686/hb0gvyljyyvy13yybjt6.webp",
                },
                {
                  image:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1742571909/fhthff8jur5ylbo16gnq.jpg",
                  description: "cassava",
                },
                {
                  image:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1742571932/uokjp1wwjs1puxgp50o8.jpg",
                  description: "cassava",
                },
                {
                  image:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1742571938/rpezxybwbklsahrily5y.jpg",
                  description: "cassava",
                },
              ],
              farmer: "67dd8877391f9d5c41e3d180",
              availableTonnes: 600,
            },
          ],
          projectFarmers: ["67dd8877391f9d5c41e3d180"],
          createdAt: "2025-03-23T20:41:16.811Z",
          updatedAt: "2025-03-23T20:41:32.491Z",
          __v: 2,
        }}
        btns={
          <>
            <Link href="#" target="_blank">
              <Button
                bgColor="transparent"
                color="#282828"
                borderRadius={"2rem"}
                px={"2.5rem"}
                py="14px"
                fontWeight={400}
                mb="32px"
                border="1px solid #282828"
                _hover={{
                  bg: "rgba(40, 40, 40, .1)",
                }}
                width="100%"
                mt="32px"
              >
                View Product Story
              </Button>
            </Link>

            <Button
              borderRadius={"2rem"}
              px={"2.5rem"}
              py="14px"
              fontWeight={400}
              mb="48px"
              width="100%"
              bg={"agrify_green"}
              _hover={{
                bg: "#0ba842",
              }}
              color={"white"}
              onClick={() => {
                setChosenProject({
                  _id: "67e071ec582a16b12774dfa1",
                  projectId: "85931158",
                  title: "Lagos Cassava Farmers Collective",
                  about:
                    "This initiative unites a network of smallholder cassava farmers from across Lagos State, all committed to producing high-quality cassava using sustainable agricultural methods. By joining forces, these farmers can streamline distribution, negotiate better prices, and ensure consistent quality for buyers. Whether you’re a local food processor, distributor, or retailer, purchasing through this collective supports the livelihoods of local farmers and contributes to a more resilient food supply chain in Nigeria.\n",
                  description:
                    "The purpose of the project activity was substituting sulphur hexafluoride (SF6), a high global warming potential (GWP) gas, with a non-global warming sulphur dioxide (SO2) gas at RIMA magnesium factory.",
                  mission:
                    "The maximum electrical on-site demand in 2000 was 1034 kW, which is expected to increase to 1200 kW by 2002. The supply of power is somewhat unreliable and the price is highly dependent on the world price of oil. Grupo Gemina is interested in building a biomass power plant to cover on-site electricity demand and to sell the excess electricity",
                  methodology: "Multi-Species Agroforrestry AGM001",
                  tags: [],
                  images: [
                    {
                      image:
                        "https://res.cloudinary.com/isaacoduh/image/upload/v1742762473/v3me95q7qhzsf7e4spu4.jpg",
                      _id: "67e071ec582a16b12774dfa2",
                    },
                    {
                      image:
                        "https://res.cloudinary.com/isaacoduh/image/upload/v1742762473/v3me95q7qhzsf7e4spu4.jpg",
                      _id: "67e071ec582a16b12774dfa3",
                    },
                  ],
                  coverImage:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1742762474/fncqvzuetgqyxwv5n1uc.webp",
                  location: "Lagos, Nigeria",
                  latitude: 7.04994,
                  longitude: 3.60478,
                  state: "Lagos",
                  country: "Nigeria",
                  category: "cassava",
                  creditStartDate: "2025-06-29T00:00:00.000Z",
                  creditEndDate: "2025-08-30T00:00:00.000Z",
                  supportingDocument:
                    "https://res.cloudinary.com/isaacoduh/image/upload/v1742762475/kdyqjl1ssqd5eehfxitl.pdf",
                  contractType: "Escrow Based Agreement",
                  projectToken: {
                    tokenId: "0.0.4690953",
                    projectId: "85931158",
                    tokenName: "Lagos Cassava Farmers Collective",
                    tokenSymbol: "AGT",
                    tokenOwner: "67dd60f9391f9d5c41e3d0bc",
                    projectFarmers: [],
                    totalTonnes: 1000,
                    availableTonnes: 600,
                    minimumPurchaseTonnes: 1,
                    price: 0.59,
                  },
                  farms: [
                    {
                      _id: "67dd88a7391f9d5c41e3d190",
                      name: "Demi's Farm",
                      country: "Nigeria",
                      state: "Lagos",
                      farmImages: [
                        {
                          image:
                            "https://res.cloudinary.com/isaacoduh/image/upload/v1742571686/hb0gvyljyyvy13yybjt6.webp",
                        },
                        {
                          image:
                            "https://res.cloudinary.com/isaacoduh/image/upload/v1742571686/hb0gvyljyyvy13yybjt6.webp",
                        },
                        {
                          image:
                            "https://res.cloudinary.com/isaacoduh/image/upload/v1742571909/fhthff8jur5ylbo16gnq.jpg",
                          description: "cassava",
                        },
                        {
                          image:
                            "https://res.cloudinary.com/isaacoduh/image/upload/v1742571932/uokjp1wwjs1puxgp50o8.jpg",
                          description: "cassava",
                        },
                        {
                          image:
                            "https://res.cloudinary.com/isaacoduh/image/upload/v1742571938/rpezxybwbklsahrily5y.jpg",
                          description: "cassava",
                        },
                      ],
                      farmer: "67dd8877391f9d5c41e3d180",
                      availableTonnes: 600,
                    },
                  ],
                  projectFarmers: ["67dd8877391f9d5c41e3d180"],
                  createdAt: "2025-03-23T20:41:16.811Z",
                  updatedAt: "2025-03-23T20:41:32.491Z",
                  __v: 2,
                });
                router.push("/purchase");
              }}
            >
              Buy Cashew Nuts
            </Button>
          </>
        }
      />
    </ProjectPageProvider>
  );
};

export default ProjectPage;
