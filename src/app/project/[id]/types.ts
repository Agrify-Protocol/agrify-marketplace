export interface SingleProjectResponse {
  _id: string;
  title: string;
  description: string;
  price: number;
  availableTonnes: number;
  totalTonnes: number;
  tags: Tag[];
  images: Image[];
  coverImage: string;
  projectId: string;
  minimumPurchaseTonnes: number;
  location: string;
  latitude: number;
  longitude: number;
  countryOfOrigin: string;
  projectProvider: string;
  projectWebsite: string;
  blockchainAddress: string;
  typeOfProject: string;
  certification: string;
  certificationURL: string;
  certificateCode: string;
  creditStartDate: Date;
  creditEndDate: Date;
  supportingDocument: string;
  projectToken: null;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  image: string;
  description: string;
  _id: string;
}

export interface Tag {
  _id: string;
  name: string;
  __v: number;
  description: string;
  icon: string;
}
