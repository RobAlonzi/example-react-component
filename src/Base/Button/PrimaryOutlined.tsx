import React from 'react';
import { Button, ButtonProps, styled } from '@material-ui/core';
import theme from '@/utils/styles/theme';

const StyledButton = styled(Button)({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 4,
  color: theme.palette.primary.main,
  fontWeight: 'initial',
  textTransform: 'initial',
  padding: '5px 15px',
  '&:hover': {
    background: 'rgba(0, 113, 235, 0.04)',
    borderColor: theme.palette.primary.main,
  },
});

function PrimaryOutlinedButton(props: ButtonProps): JSX.Element {
  return (
    <StyledButton {...props} color="primary" variant="outlined" disableElevation disableRipple />
  );
}
export default PrimaryOutlinedButton;
