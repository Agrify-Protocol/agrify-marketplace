import { Metadata } from "next";
import ProductStoryComp from "@/components/ProductStoryComp";

export const metadata: Metadata = {
  title: "Agrify - Product Story",
  description:
    "Agrify Marketplace focuses on regenerative farming and carbon offsetting.",
};

const ProductStory = () => {
  return <ProductStoryComp />;
};

export default ProductStory;
