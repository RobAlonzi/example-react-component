import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { ShowMoreButtonProps } from './interface';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  button: {
    color: theme.palette.gray3.main,
    fontWeight: 'initial',
    textTransform: 'initial',
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  icon: {
    color: theme.palette.gray2.main,
  },
}));

function ShowMoreButton({ className, expanded, onClick }: ShowMoreButtonProps): JSX.Element {
  const classes = useStyles();
  const Icon = expanded ? KeyboardArrowUpIcon : KeyboardArrowDownIcon;

  const handleClick = () => {
    onClick(!expanded);
  };

  return (
    <Button
      disableRipple
      className={clsx(classes.button, [className])}
      variant="text"
      endIcon={<Icon className={classes.icon} />}
      onClick={handleClick}
    >
      Show {expanded ? 'Less' : 'More'}
    </Button>
  );
}

export default ShowMoreButton;
