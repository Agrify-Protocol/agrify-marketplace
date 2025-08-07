export type CategoryData = {
  message: string;
  "Total Available Credits": number;
  data: StateProjectData[];
};

export interface StateProjectData {
  projectID: string;
  state: string;
  country: string;
  totalTonnes: number;
  farms: number;
}
