import React, { useMemo, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';
import InsightCallout, { INSIGHT_ACTIONS } from '@/InsightCallout';
import { useInsightsPanel, ACTION_TYPES } from '@/InsightsPanel';
import { INSIGHT_PANEL_TAB_VALUES } from '@/InsightsPanel';
import Insight from '@/Insight';
import { InsightsPanelInsightProps } from './interface';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  container: {
    // 120px is the height of the footer
    marginBottom: 120,
    padding: theme.spacing(2, 4, 0),
  },
  text: {
    color: theme.palette.gray3.main,
  },
}));

function InsightsPanelInsight({
  canAction = true,
  onAction,
}: InsightsPanelInsightProps): JSX.Element {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const { state, dispatch } = useInsightsPanel();
  const insightList =
    state.tab === INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS ? state.insights : state.savedInsights;

  function determineAction(): INSIGHT_ACTIONS {
    if (
      state.savedInsights.find((insight) => insight.payload_id === state.activeInsight?.payload_id)
    ) {
      return INSIGHT_ACTIONS.UNSAVE;
    }

    return INSIGHT_ACTIONS.SAVE;
  }

  const action = useMemo(determineAction, [state.activeInsight, state.savedInsights]);
  async function handleAction(): Promise<void> {
    if (canAction) {
      setLoading(true);
      onAction && (await onAction(state.activeInsight!, action));

      // Add to saved insights
      if (action === INSIGHT_ACTIONS.SAVE) {
        dispatch({ type: ACTION_TYPES.SAVE_ACTIVE_INSIGHT });
      }

      // Remove from saved insights
      if (action === INSIGHT_ACTIONS.UNSAVE) {
        dispatch({ type: ACTION_TYPES.UNSAVE_ACTIVE_INSIGHT });
      }

      setLoading(false);
    }
  }

  function determineButtonText(): string {
    if (action === INSIGHT_ACTIONS.SAVE && loading) {
      return 'Saving...';
    }

    if (action === INSIGHT_ACTIONS.SAVE && !loading) {
      return 'Save';
    }

    if (action === INSIGHT_ACTIONS.UNSAVE && loading) {
      return 'Removing...';
    }

    if (action === INSIGHT_ACTIONS.UNSAVE && !loading) {
      return 'Remove';
    }

    return 'Save';
  }

  if (!insightList.length) {
    return (
      <Box marginTop={6} textAlign="center">
        <Typography className={classes.text}>No Insights Available.</Typography>
      </Box>
    );
  }

  return (
    <>
      <InsightCallout
        buttonText={determineButtonText()}
        onClick={handleAction}
        showButton={canAction}
        title={state.activeInsight?.title || ''}
        loading={loading}
      />
      <div className={classes.container}>
        <Insight collapsable insight={state.activeInsight} />
      </div>
    </>
  );
}

export default InsightsPanelInsight;
