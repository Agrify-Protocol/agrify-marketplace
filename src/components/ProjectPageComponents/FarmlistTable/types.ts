export type FarmListTableProps = {
  farm_list: Farm[];
};

export interface Farm {
  _id: string;
  name: string;
  country: string;
  state: string;
  farmer: string;
  availableTonnes: number;
  farmImages?: { image: string }[];
}
