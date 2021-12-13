import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { InsightsPanelHeaderProps } from './interface';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  container: {
    background: theme.palette.gray6.main,
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.gray3.main,
  },
}));

function InsightsPanelHeader({
  children,
  title,
}: React.PropsWithChildren<InsightsPanelHeaderProps>): JSX.Element {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item xs>
        <Typography className={classes.title} variant="h6" component="p">
          {title}
        </Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
}

export default InsightsPanelHeader;
