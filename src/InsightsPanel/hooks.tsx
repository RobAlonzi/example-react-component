import React, { useContext, useReducer, useEffect } from 'react';
import { InsightsPanelProps } from './interface';
import { InsightsPanelContext } from './context';
import { insightsPanelReducer, INITIAL_STATE, ACTION_TYPES } from './reducer';

export function InsightsPanelProvider({
  children,
  insights = [],
  savedInsights = [],
}: React.PropsWithChildren<InsightsPanelProps>) {
  const [state, dispatch] = useReducer(insightsPanelReducer, {
    ...INITIAL_STATE,
    insights,
    savedInsights,
    count: insights.length,
    activeInsight: insights[0],
  });

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.SET_INSIGHTS,
      payload: insights,
    });
  }, [insights]);

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.SET_SAVED_INSIGHTS,
      payload: savedInsights,
    });
  }, [savedInsights]);

  const value = { state, dispatch };

  return <InsightsPanelContext.Provider value={value}>{children}</InsightsPanelContext.Provider>;
}

export function useInsightsPanel() {
  const context = useContext(InsightsPanelContext);

  if (!context) {
    throw new Error('useInsightsPanel must be used within a <InsightsPanel />');
  }

  return context;
}
