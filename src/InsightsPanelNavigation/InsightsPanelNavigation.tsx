import React from 'react';
import Grid from '@material-ui/core/Grid';

import Button from '@/Base/Button/PrimaryOutlined';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';
import { InsightsPanelNavigationProps } from './interface';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  button: {
    color: theme.palette.primary.main,
    textTransform: 'initial',
    fontWeight: 'initial',
    borderColor: theme.palette.primary.main,
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    '& .Mui-disabled': {
      color: theme.palette.gray3.main,
    },
  },
}));

function InsightNavigation({
  onPrevious,
  previousDisabled,
  onNext,
  nextDisabled,
}: InsightsPanelNavigationProps): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button
          fullWidth
          color="primary"
          disabled={previousDisabled}
          onClick={onPrevious}
          variant="outlined"
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          fullWidth
          disabled={nextDisabled}
          onClick={onNext}
          color="primary"
          variant="outlined"
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default InsightNavigation;
