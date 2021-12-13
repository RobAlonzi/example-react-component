import React from 'react';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';

import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';
import { StepperProps } from './interface';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  active: {
    background: theme.palette.primary.main,
  },
  stepper: {
    background: 'transparent',
  },
}));

function Stepper({ activeStep, steps }: StepperProps): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" data-testid="stepper">
      <MobileStepper
        classes={{ root: classes.stepper, dotActive: classes.active }}
        variant="dots"
        steps={steps}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
      />
    </Grid>
  );
}

export default Stepper;
