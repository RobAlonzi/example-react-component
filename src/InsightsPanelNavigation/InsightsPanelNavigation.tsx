import React from 'react';
import Grid from '@material-ui/core/Grid';

import Button from '@/Base/Button/PrimaryOutlined';
import { InsightsPanelNavigationProps } from './interface';


function InsightNavigation({
  onPrevious,
  previousDisabled,
  onNext,
  nextDisabled,
}: InsightsPanelNavigationProps): JSX.Element {
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
