import { InsightChartInteractiveProps, InsightChartImageProps } from '@/InsightChart';

export type InsightProps = {
  collapsable?: boolean;
  insight?: UserInsight;
} & (InsightChartInteractiveProps | InsightChartImageProps);

export interface UserInsight {
  window: UserInsightWindow;
  significance: number;
  tags: string[];
  categories: string[];
  heading: string;
  title: string;
  evidence: string;
  timestamp: number;
  transcription: string;
  payload_id: string;
}

interface UserInsightWindow {
  window_id: string;
  generator_id: string;
  view_id: string;
}
