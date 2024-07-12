import casava from "../../../assets/casava.svg";
import yam from "../../../assets/dried_yam_1_.svg";
import tomato from "../../../assets/tomato.svg";
import corn from "../../../assets/corn.svg";
import { v4 as uuid } from "uuid";

export const categories = [
  { id: uuid(), image: casava, name: "Casava Farms", carbon_credits: 200000 },
  { id: uuid(), image: yam, name: "Yam Farms", carbon_credits: 200000 },
  { id: uuid(), image: tomato, name: "Tomato Farms", carbon_credits: 200000 },
  { id: uuid(), image: casava, name: "Soybean Farms", carbon_credits: 200000 },
  { id: uuid(), image: casava, name: "Rice Farms", carbon_credits: 200000 },
  { id: uuid(), image: corn, name: "Maize Farms", carbon_credits: 200000 },
];
