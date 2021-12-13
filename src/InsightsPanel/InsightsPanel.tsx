import React from 'react';
import Grid from '@material-ui/core/Grid';

import makeStylesWithTheme from '@/utils/hooks/makeStylesWithTheme';
import { InsightsPanelProps } from './interface';
import { InsightsPanelProvider } from './hooks';

const useStyles = makeStylesWithTheme(() => ({
  container: {
    minHeight: '100%',
    position: 'relative',
  },
}));

function InsightsPanel({
  children,
  insights,
  savedInsights,
}: React.PropsWithChildren<InsightsPanelProps>): JSX.Element {
  const classes = useStyles();

  return (
    <InsightsPanelProvider insights={insights} savedInsights={savedInsights}>
      <Grid container direction="column" className={classes.container}>
        {children}
      </Grid>
    </InsightsPanelProvider>
  );
}

export default InsightsPanel;
