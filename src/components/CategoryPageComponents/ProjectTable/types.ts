export type ProjectTableProps = {
  projects: StateProject[];
  carbon_credits: number;
};

export type StateProject = {
  id: string;
  project_state: string;
  country: string;
  no_of_farms: number;
  available_credits: number;
};
