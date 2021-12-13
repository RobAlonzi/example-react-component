import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';
import { InsightsPanelUninterestedButtonProps } from './interface';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  button: {
    color: theme.palette.primary.main,
    fontWeight: 'initial',
    textTransform: 'initial',
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  container: {
    marginTop: theme.spacing(1),
  },
}));

function InsightsPanelUninterestedButton({
  onClick,
}: InsightsPanelUninterestedButtonProps): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.container}>
      <Button
        disableRipple
        color="primary"
        className={classes.button}
        variant="text"
        onClick={onClick}
      >
        Not interested in this insight
      </Button>
    </Grid>
  );
}

export default InsightsPanelUninterestedButton;
