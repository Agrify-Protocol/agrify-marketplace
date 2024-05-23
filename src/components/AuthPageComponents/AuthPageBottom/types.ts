export type AuthPageBottomProps = {
  line_1: LineData;
  line_2: LineData;
};

type LineData = { question: string; link_text: string; route: string };
