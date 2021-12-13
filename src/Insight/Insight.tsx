import React, { useState, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

import { InsightProps } from './interface';
import InsightChart from '@/InsightChart';
import ShowMoreButton from '@/Base/ShowMoreButton';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  container: {
    padding: theme.spacing(2, 4, 0),
  },
  heading: {
    color: theme.palette.gray4.main,
    fontFamily: 'Oswald, sans-serif',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    maxWidth: '100%',
    textTransform: 'uppercase',
  },
  showMore: {
    marginTop: theme.spacing(2),
  },
  support: {
    color: theme.palette.gray3.main,
    margin: 0,
    maxWidth: '100%',
  },
}));

function Insight({ collapsable = true, insight, ...other }: InsightProps): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(!collapsable);
  const classes = useStyles();

  if (!insight) {
    return <></>;
  }

  return (
    <>
      <Typography variant="h6" component="p" className={classes.heading}>
        {insight.heading}
      </Typography>
      <Typography className={classes.support} variant="body2">
        <span dangerouslySetInnerHTML={{ __html: insight.transcription }} />
      </Typography>
      {collapsable && (
        <ShowMoreButton className={classes.showMore} expanded={expanded} onClick={setExpanded} />
      )}
      <Collapse timeout={300} collapsedSize={0} in={expanded}>
        <InsightChart evidence={insight.evidence} {...other} />
      </Collapse>
    </>
  );
}

export default Insight;
