import { createContext } from 'react';
import { State, Dispatch } from './reducer';

export const InsightsPanelContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
);
InsightsPanelContext.displayName = 'InsightsPanelContext';
