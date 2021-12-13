export type InsightChartProps = { evidence: string } & (
  | InsightChartInteractiveProps
  | InsightChartImageProps
);

export type InsightChartInteractiveProps = {
  image?: false;
  imageRef?: never;
};

export type InsightChartImageProps = {
  image: true;
  imageRef: React.RefObject<HTMLImageElement>;
};

export interface InsightChartStyleProps {
  image: boolean;
}
