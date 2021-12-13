import { makeStyles } from '@material-ui/core/styles';
export type { Theme } from '@material-ui/core/styles';
import { Styles, WithStylesOptions } from '@material-ui/styles/withStyles';
import { Omit } from '@material-ui/types';

import theme from '@/utils/styles/theme';

function makeStylesWithTheme<Props extends object = {}, ClassKey extends string = string>(
  styles: Styles<typeof theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<typeof theme>, 'withTheme' | 'defaultTheme'>,
) {
  return makeStyles(styles, { defaultTheme: theme, ...(options || {}) });
}

export default makeStylesWithTheme;
