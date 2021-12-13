import React, { useLayoutEffect, useRef, useState } from 'react';
import Plot from 'react-plotly.js';
import Grid from '@material-ui/core/Grid';

import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';
import { InsightChartProps, InsightChartStyleProps } from './interface';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  image: (props: InsightChartStyleProps) => ({
    display: props.image ? 'initial' : 'none',
  }),
  graph: (props: InsightChartStyleProps) => ({
    display: props.image ? 'none' : 'initial',
  }),
}));

function InsightChart({ evidence, image = false, imageRef }: InsightChartProps): JSX.Element {
  const classes = useStyles({ image });
  const evidenceObj = JSON.parse(evidence);
  const [imgSrc, setImgSrc] = useState<string>('');
  const plotRef = useRef<Plot>(null);

  useLayoutEffect(() => {
    async function generateImage() {
      const Plotly = await import('plotly.js');
      // Have to do any bc apparently 'el' doesn't exist on type Plot
      const plotComponent: any = plotRef.current;

      if (!plotComponent) {
        return;
      }

      const imgSrc = await Plotly.toImage(plotComponent.el, {
        format: 'jpeg',
        height: 600,
        width: 282,
      });

      setImgSrc(imgSrc);
    }

    if (image) {
      generateImage();
    }
  }, [image]);

  return (
    <Grid container justifyContent="center" className={classes.container}>
      {imgSrc ? (
        <img
          className={classes.image}
          data-testid="plotly-insight-image"
          alt="support"
          ref={imageRef}
          src={imgSrc}
        />
      ) : null}
      <div className={classes.graph} data-testid="plotly-insight">
        <Plot
          ref={plotRef}
          data={evidenceObj.data}
          layout={{
            ...evidenceObj.layout,
            width: 260,
          }}
          config={{
            displayModeBar: false,
          }}
        />
      </div>
    </Grid>
  );
}

export default InsightChart;
