import { UserInsight } from '@/Insight';
import { INSIGHT_ACTIONS } from '@/InsightCallout';

export type InsightsPanelInsightProps = ActionAvailable | ActionUnavailable;

interface ActionAvailable {
  onAction: (insight: UserInsight, action: INSIGHT_ACTIONS) => Promise<void>;
  canAction?: true;
}

interface ActionUnavailable {
  onAction?: never;
  canAction: false;
}
