import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from '@/Base/Button/PrimaryOutlined';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';
import { InsightCalloutProps } from './interface';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  button: {
    padding: theme.spacing(0, 1),
    minWidth: 'unset',
  },
  callout: {
    color: theme.palette.gray3.main,
    fontSize: '0.9rem',
  },
  container: {
    margin: 0,
    padding: theme.spacing(2, 3),
    borderBottom: `1px solid ${theme.palette.gray7.main}`,
    borderTop: `1px solid ${theme.palette.gray7.main}`,
  },
  child: {
    marginRight: theme.spacing(1),
    '&:last-child': {
      marginRight: 0,
    },
  },
  loading: {
    padding: '4px 8px',
  },
}));

function InsightCallout({
  buttonText,
  onClick,
  loading,
  title,
  showButton = true,
}: InsightCalloutProps): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.container}>
      {showButton && (
        <Grid item className={classes.child}>
          <Button
            className={classes.button}
            disabled={loading}
            color="primary"
            variant="outlined"
            size="small"
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </Grid>
      )}
      <Grid item className={classes.child}>
        <Typography className={classes.callout}>{title}</Typography>
      </Grid>
    </Grid>
  );
}

export default InsightCallout;
