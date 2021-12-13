import { UserInsight } from '@/Insight';
import { UninterestedReason } from '@/InsightsPanelUninterestedForm';

export type InsightsPanelFooterProps = ShowUninterested | HideUninterested;

interface ShowUninterested {
  onUninterested: (insight: UserInsight, reason: UninterestedReason) => Promise<void>;
  showUninterested?: true;
}

interface HideUninterested {
  onUninterested?: never;
  showUninterested: false;
}
