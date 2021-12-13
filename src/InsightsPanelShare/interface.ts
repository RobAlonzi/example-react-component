import { InsightShareSubmitProps } from '@/InsightShareForm';

export interface InsightsPanelShareProps {
  onShare: (values: InsightShareSubmitProps) => Promise<void>;
}

export type InsightsPanelSubmitProps = InsightShareSubmitProps;
