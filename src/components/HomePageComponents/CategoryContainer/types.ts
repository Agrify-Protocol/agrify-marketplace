export type CategoryObject = {
  category: Category;
  totalTonnes: number;
  farms: number;
};

type Category = "cassava" | "tomato" | "rice" | "yam" | "maize" | "soybean";
