export interface InsightsPanelUninterestedFormProps {
  onSubmit: (reason: UninterestedReason) => void;
  categories: string[];
  tags: string[];
  type?: string;
  loading: boolean;
  onCancel: () => void;
}

export interface UninterestedReason {
  filter_type: 'category' | 'tag' | 'type';
  value: string;
}
