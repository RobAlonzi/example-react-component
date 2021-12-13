import { UserInsight } from './interface';
import { INSIGHT_PANEL_TAB_VALUES } from './constants';

export interface State {
  insights: UserInsight[];
  savedInsights: UserInsight[];
  activeIdx: number;
  activeInsight?: UserInsight;
  count: number;
  tab: INSIGHT_PANEL_TAB_VALUES;
}

export const INITIAL_STATE: State = {
  insights: [],
  savedInsights: [],
  activeIdx: 0,
  activeInsight: undefined,
  count: 0,
  tab: INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS,
};

export enum ACTION_TYPES {
  SET_TAB_VALUE = 'SET_TAB_VALUE',
  SET_ACTIVE_IDX = 'SET_ACTIVE_IDX',
  REMOVE_ACTIVE_INSIGHT = 'REMOVE_ACTIVE_INSIGHT',
  SAVE_ACTIVE_INSIGHT = 'SAVE_ACTIVE_INSIGHT',
  UNSAVE_ACTIVE_INSIGHT = 'UNSAVE_ACTIVE_INSIGHT',
  SET_INSIGHTS = 'SET_INSIGHTS',
  SET_SAVED_INSIGHTS = 'SET_SAVED_INSIGHTS',
}

interface SetTabAction {
  type: ACTION_TYPES.SET_TAB_VALUE;
  payload: INSIGHT_PANEL_TAB_VALUES;
}

interface SetActiveIdx {
  type: ACTION_TYPES.SET_ACTIVE_IDX;
  payload: number;
}

interface RemoveActiveInsight {
  type: ACTION_TYPES.REMOVE_ACTIVE_INSIGHT;
}

interface SaveActiveInsight {
  type: ACTION_TYPES.SAVE_ACTIVE_INSIGHT;
}

interface UnSaveActiveInsight {
  type: ACTION_TYPES.UNSAVE_ACTIVE_INSIGHT;
}

interface SetInsights {
  type: ACTION_TYPES.SET_INSIGHTS;
  payload: UserInsight[];
}

interface SetSavedInsights {
  type: ACTION_TYPES.SET_SAVED_INSIGHTS;
  payload: UserInsight[];
}

type Actions =
  | SetTabAction
  | SetActiveIdx
  | SetInsights
  | SetSavedInsights
  | RemoveActiveInsight
  | SaveActiveInsight
  | UnSaveActiveInsight;

export type Dispatch = (action: Actions) => void;

export function insightsPanelReducer(state: State, action: Actions) {
  switch (action.type) {
    case ACTION_TYPES.SET_INSIGHTS: {
      const isTabActive = state.tab === INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS;
      return {
        ...state,
        insights: action.payload,
        activeIdx: isTabActive ? 0 : state.activeIdx,
        activeInsight: isTabActive ? action.payload[0] : state.activeInsight,
        count: isTabActive ? action.payload.length : state.count,
      };
    }
    case ACTION_TYPES.SET_SAVED_INSIGHTS: {
      const isTabActive = state.tab === INSIGHT_PANEL_TAB_VALUES.SAVED_INSIGHTS;
      return {
        ...state,
        savedInsights: action.payload,
        activeIdx: isTabActive ? 0 : state.activeIdx,
        activeInsight: isTabActive ? action.payload[0] : state.activeInsight,
        count: isTabActive ? action.payload.length : state.count,
      };
    }
    case ACTION_TYPES.SET_TAB_VALUE: {
      const activeInsightKey =
        action.payload === INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS ? 'insights' : 'savedInsights';
      return {
        ...state,
        tab: action.payload,
        activeIdx: 0,
        activeInsight: state[activeInsightKey][0],
        count: state[activeInsightKey].length,
      };
    }
    case ACTION_TYPES.SET_ACTIVE_IDX: {
      const activeInsightList =
        state.tab === INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS ? state.insights : state.savedInsights;

      return {
        ...state,
        activeIdx: action.payload,
        activeInsight: activeInsightList[action.payload],
      };
    }

    case ACTION_TYPES.REMOVE_ACTIVE_INSIGHT: {
      const activeInsightKey =
        state.tab === INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS ? 'insights' : 'savedInsights';
      const updList = state[activeInsightKey].filter(
        (insight) => insight.payload_id !== state.activeInsight?.payload_id,
      );
      const activeIdx = Math.max(0, state.activeIdx - 1);

      return {
        ...state,
        [activeInsightKey]: updList,
        activeIdx,
        activeInsight: updList[activeIdx],
        count: updList.length,
      };
    }

    case ACTION_TYPES.SAVE_ACTIVE_INSIGHT: {
      return {
        ...state,
        savedInsights: state.activeInsight
          ? [...state.savedInsights, state.activeInsight]
          : state.savedInsights,
      };
    }

    case ACTION_TYPES.UNSAVE_ACTIVE_INSIGHT: {
      let count = state.count;
      let activeIdx = state.activeIdx;
      let activeInsight = state.activeInsight;
      const savedInsights = state.savedInsights.filter(
        (insight) => state.activeInsight?.payload_id !== insight.payload_id,
      );

      if (state.tab === INSIGHT_PANEL_TAB_VALUES.SAVED_INSIGHTS) {
        count -= 1;
        activeIdx = Math.max(0, activeIdx - 1);
        activeInsight = savedInsights[activeIdx];
      }

      return {
        ...state,
        count,
        activeIdx,
        activeInsight,
        savedInsights,
      };
    }
  }
}
