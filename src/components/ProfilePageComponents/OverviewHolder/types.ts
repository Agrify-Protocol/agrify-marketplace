export interface OverviewType {
  totalProjectsFunded: number;
  totalTonnes: number;
  totalAmount: number;
  projectsFunded: ProjectsFunded[];
}

export interface ProjectsFunded {
  title: string;
  purchaseType: string;
  startDate: string;
}
