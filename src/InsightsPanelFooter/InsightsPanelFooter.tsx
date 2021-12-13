import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';

import Stepper from '@/Base/Stepper';
import { useInsightsPanel, ACTION_TYPES, INSIGHT_PANEL_TAB_VALUES } from '@/InsightsPanel';
import InsightsPanelNavigation from '@/InsightsPanelNavigation';
import InsightsPanelUninterestedButton from '@/InsightsPanelUninterestedButton';
import InsightsPanelUninterestedForm, { UninterestedReason } from '@/InsightsPanelUninterestedForm';
import { InsightsPanelFooterProps } from './interface';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  body: ({ reasons }: { reasons: number }) => ({
    height: reasons * 40 + 100,
  }),
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  container: {
    background: theme.palette.gray8.main,
    padding: theme.spacing(2),
  },
}));

function InsightsPanelFooter({
  showUninterested = true,
  onUninterested,
}: React.PropsWithChildren<InsightsPanelFooterProps>): JSX.Element {
  const { state, dispatch } = useInsightsPanel();
  const classes = useStyles({
    reasons:
      (state.activeInsight?.title ? 1 : 0) +
      (state.activeInsight?.tags.length || 0) +
      (state.activeInsight?.categories.length || 0),
  });
  const [expanded, setExpanded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const insightList =
    state.tab === INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS ? state.insights : state.savedInsights;

  function handleBack() {
    dispatch({ type: ACTION_TYPES.SET_ACTIVE_IDX, payload: Math.max(0, state.activeIdx - 1) });
  }

  function handleNext() {
    dispatch({
      type: ACTION_TYPES.SET_ACTIVE_IDX,
      payload: Math.min(state.count, state.activeIdx + 1),
    });
  }

  async function handleUninterested(reason: UninterestedReason) {
    if (showUninterested) {
      setLoading(true);
      onUninterested && (await onUninterested(state.activeInsight!, reason));
      dispatch({ type: ACTION_TYPES.REMOVE_ACTIVE_INSIGHT });
      setLoading(false);
      setExpanded(false);
    }
  }

  if (!insightList.length) {
    return <></>;
  }

  return (
    <div className={classes.wrapper} data-testid="insights-panel-footer">
      <Stepper steps={state.count} activeStep={state.activeIdx} />
      <Collapse className={classes.container} timeout={300} collapsedSize={65} in={expanded}>
        <div className={classes.body}>
          {expanded ? (
            <InsightsPanelUninterestedForm
              onSubmit={handleUninterested}
              onCancel={() => setExpanded(false)}
              tags={state.activeInsight?.tags || []}
              type={state.activeInsight?.title}
              categories={state.activeInsight?.categories || []}
              loading={loading}
            />
          ) : (
            <>
              <InsightsPanelNavigation
                previousDisabled={state.activeIdx === 0}
                nextDisabled={state.activeIdx + 1 >= state.count}
                onPrevious={handleBack}
                onNext={handleNext}
              />
              {showUninterested &&
                Boolean(state.count) &&
                state.tab === INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS && (
                  <InsightsPanelUninterestedButton onClick={() => setExpanded(true)} />
                )}
            </>
          )}
        </div>
      </Collapse>
    </div>
  );
}

export default InsightsPanelFooter;
