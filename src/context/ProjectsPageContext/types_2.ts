export interface SingleProject {
  _id: string;
  projectId: string;
  title: string;
  description: string;
  tags: any[];
  images: Image[];
  coverImage: string;
  location: string;
  state: string;
  country: string;
  category: string;
  creditStartDate: Date;
  creditEndDate: Date;
  contractType: string;
  supportingDocument: string;
  minimumPurchaseTonnes: number;
  mission: string;
  methodology: string;
  projectToken: ProjectToken;
  farms: Farm[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Farm {
  _id: string;
  name: string;
  country: string;
  state: string;
  farmer: string;
  availableTonnes: number;
}

export interface Image {
  image: string;
  _id: string;
}

export interface ProjectToken {
  tokenId: string;
  projectId: string;
  tokenName: string;
  tokenSymbol: string;
  tokenOwner: string;
  projectFarmers: string[];
  totalTonnes: number;
  availableTonnes: number;
  minimumPurchaseTonnes: number;
  price: number;
}
