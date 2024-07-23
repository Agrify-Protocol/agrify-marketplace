export interface DetailedFarm {
  description: string;
  cultivationType: string;
  _id: string;
  name: string;
  country: string;
  address: string;
  city: string;
  state: string;
  farmDocs: string[];
  farmImages: FarmImage[];
  category: string;
  lat: number;
  long: number;
  area: number;
  farmer: string;
  availableTonnes: number;
  milestones: any[];
}

export interface FarmImage {
  image: string;
}
