import { UserInsight } from '@/Insight';

export interface InsightShareFormProps {
  insight: UserInsight;
  loading: boolean;
  onCancel: () => void;
  onSubmit: (values: InsightShareSubmitProps) => void;
  open: boolean;
}

export interface InsightShareFormValues {
  email: string;
  message: string;
}

export interface InsightShareSubmitProps {
  email: string;
  message: string;
  image: string;
  insight: UserInsight;
}
