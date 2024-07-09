export type FarmDetailProps = {
  detail: {
    name: string;
    score: number;
    description: string;
    location: string;
    cultivation_type: string;
    available_carbon: number;
  };
};

export type HighlightItemProps = {
  title: string;
  value: string;
};
