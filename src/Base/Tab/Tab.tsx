import React from 'react';
import MUITab, { TabProps } from '@material-ui/core/Tab';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  tab: {
    color: theme.palette.gray3.main,
    textTransform: 'initial',
    flexGrow: 1,
    fontWeight: 400,
    maxWidth: 'unset',
  },
  selected: {
    '&.Mui-selected': {
      color: theme.palette.gray3.main,
    },
  },
}));

function Tab({ classes, ...props }: TabProps): JSX.Element {
  const baseClasses = useStyles();

  return (
    <MUITab
      classes={{
        root: baseClasses.tab,
        selected: baseClasses.selected,
        ...classes,
      }}
      {...props}
    />
  );
}

export default Tab;
