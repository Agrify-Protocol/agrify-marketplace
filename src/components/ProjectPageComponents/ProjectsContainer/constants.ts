import { v4 as uuid } from "uuid";

import woods_1 from "../../../assets/eaf82964b742659b33e869752d04bf78.jpg";
import woods_2 from "../../../assets/a3169f8d6856d8e9e87e37568c9d0ff0.jpg";
import woods_3 from "../../../assets/woods.jpg";

export const projects = [
  {
    _id: uuid(),
    coverImage: woods_1.src,
    title: "Oil Palm and Cocoa Agroforestry Project in...",
    tags: [
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
    ],
  },
  {
    _id: uuid(),
    coverImage: woods_2.src,
    title: "Baggi Chiefdom: Cashew Eco-Agroforestry Project",
    tags: [
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
    ],
  },
  {
    _id: uuid(),
    coverImage: woods_3.src,
    title: "REDD+ Project in Eastern Nigeria",
    tags: [
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
    ],
  },
  {
    _id: uuid(),
    coverImage: woods_1.src,
    title: "Oil Palm and Cocoa Agroforestry Project in...",
    tags: [
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
    ],
  },
  {
    _id: uuid(),
    coverImage: woods_2.src,
    title: "Baggi Chiefdom: Cashew Eco-Agroforestry Project",
    tags: [{ _id: uuid(), icon: "" }],
  },
  {
    _id: uuid(),
    coverImage: woods_3.src,
    title: "REDD+ Project in Eastern Nigeria",
    tags: [
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
      { _id: uuid(), icon: "" },
    ],
  },
];
