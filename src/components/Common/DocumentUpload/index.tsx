"use client";

import { useRef } from "react";
import { Box, Text, Flex, Image, Grid, IconButton } from "@chakra-ui/react";
import { Inter_Display } from "@/fonts";
import { CloudUpload, FileText, X } from "lucide-react";

export interface PreviewItem {
  type: "image" | "pdf";
  url: string;
  name: string;
}

interface Props {
  title: string;
  subtitle?: string;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  previews: PreviewItem[];
  setPreviews: React.Dispatch<React.SetStateAction<PreviewItem[]>>;
}

export const DocumentUpload = ({
  title,
  subtitle,
  setFiles,
  previews,
  setPreviews,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (!selected) return;

    const fileArray = Array.from(selected);

    const mapped = fileArray.map((file) => {
      if (file.type === "application/pdf") {
        return {
          type: "pdf" as const,
          name: file.name,
          url: "",
        };
      }

      const url = URL.createObjectURL(file);

      return {
        type: "image" as const,
        name: file.name,
        url,
      };
    });

    setFiles((prev) => [...prev, ...fileArray]);
    setPreviews((prev) => [...prev, ...mapped]);
  };

  const removeItem = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="gray_2"
      borderRadius="1rem"
      px={{ base: "16px", md: "30px" }} // responsive padding
      py="17px"
      cursor="pointer"
      my={4}
      fontFamily={Inter_Display.style.fontFamily}
      onClick={() => inputRef.current?.click()}
    >
      <Box borderBottom="1px solid" borderColor="gray_2" mb={2} pb={2}>
        <Text color="black">{title}</Text>
      </Box>

      <Text fontSize="sm" color="gray_1">
        {subtitle}
      </Text>

      <Flex
        h="140px"
        bg="gray_3"
        mt={4}
        borderRadius="lg"
        align="center"
        justify="center"
        textAlign="center"
      >
        <Box>
          <CloudUpload
            size={32}
            style={{ margin: "auto", marginBottom: "4px" }}
          />
          <Text fontSize="sm" color="gray_1">
            Upload file from device
          </Text>
          <Text fontSize="xs" color="gray_1">
            (PNG, JPG, JPEG, WEBP, PDF)
          </Text>
        </Box>
      </Flex>

      <Box display="none">
        <input
          type="file"
          accept="image/*,application/pdf"
          ref={inputRef}
          onChange={handleChange}
          multiple
        />
      </Box>

      {previews?.length > 0 && (
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
          }} // responsive
          gap={3}
          mt={4}
        >
          {previews.map((item, index) => (
            <Box key={index} position="relative">
              {item.type === "image" ? (
                <Image
                  src={item.url}
                  alt={`Preview ${index}`}
                  w="100%"
                  h="110px"
                  objectFit="cover"
                  borderRadius="lg"
                />
              ) : (
                <Flex
                  w="100%"
                  h="110px"
                  bg="#f2f2f2"
                  borderRadius="lg"
                  gap={2}
                  align="center"
                  justify="center"
                  direction="column"
                >
                  <FileText />
                  <Text
                    fontSize="sm"
                    color="black"
                    maxW="100px"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden"
                  >
                    {item.name}
                  </Text>
                </Flex>
              )}

              <IconButton
                aria-label="remove-file"
                icon={<X size={14} />}
                position="absolute"
                top="4px"
                right="4px"
                bg="white"
                borderRadius="full"
                p={1}
                size="xs"
                boxShadow="sm"
                opacity={0.8}
                _hover={{ opacity: 1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(index);
                }}
              />
            </Box>
          ))}
        </Grid>
      )}
    </Box>
  );
};
