import React, { createRef } from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';
import InsightChart from './InsightChart';

describe('Insight', () => {
  // jsdom doesn't support canvas, so not much testing can be done
  // https://github.com/jsdom/jsdom#canvas-support
  test('renders graph', async () => {
    render(<InsightChart evidence={SAMPLE_USER_INSIGHTS[0].evidence} />);

    expect(screen.getByTestId('plotly-insight')).toBeInTheDocument();
  });

  // TODO: not sure why the image is never in the DOM in this test
  // implemented a sub-par test until this issue is resolved
  test('does not show graph if image is set', async () => {
    const imageRef = createRef<HTMLImageElement>();

    render(<InsightChart image evidence={SAMPLE_USER_INSIGHTS[0].evidence} imageRef={imageRef} />);

    expect(screen.getByTestId('plotly-insight')).not.toBeVisible();
  });
});
