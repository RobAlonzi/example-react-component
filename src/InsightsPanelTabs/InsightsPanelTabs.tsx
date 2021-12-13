import React from 'react';
import Tabs from '@material-ui/core/Tabs';

import Tab from '@/Base/Tab';
import { useInsightsPanel, ACTION_TYPES, INSIGHT_PANEL_TAB_VALUES } from '@/InsightsPanel';
import { InsightsPanelTabsProps } from './interface';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  indicator: {
    backgroundColor: theme.palette.primary.main,
  },
  tabs: {
    width: '100%',
  },
}));

function InsightsPanelTabs({ onChange }: InsightsPanelTabsProps): JSX.Element {
  const classes = useStyles();
  const { state, dispatch } = useInsightsPanel();

  function handleTabChange(event: React.ChangeEvent<{}>, next: INSIGHT_PANEL_TAB_VALUES) {
    if (state.tab !== next) {
      onChange?.(next);
      dispatch({ type: ACTION_TYPES.SET_TAB_VALUE, payload: next });
    }
  }

  return (
    <Tabs
      centered
      classes={{ root: classes.tabs, indicator: classes.indicator }}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleTabChange}
      value={state.tab}
    >
      <Tab
        label={INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS}
        value={INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS}
      />
      <Tab
        label={INSIGHT_PANEL_TAB_VALUES.SAVED_INSIGHTS}
        value={INSIGHT_PANEL_TAB_VALUES.SAVED_INSIGHTS}
      />
    </Tabs>
  );
}

export default InsightsPanelTabs;
