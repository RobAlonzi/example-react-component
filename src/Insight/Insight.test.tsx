import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Insight from './Insight';
import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';

describe('Insight', () => {
  test('does not render on no insight', async () => {
    const { container } = render(<Insight />);

    expect(container).toBeEmptyDOMElement();
  });

  test('renders heading', async () => {
    render(<Insight insight={SAMPLE_USER_INSIGHTS[0]} />);

    expect(screen.getByText('32% of Locations not Enrolled')).toBeInTheDocument();
  });

  test('renders transcription', async () => {
    render(<Insight insight={SAMPLE_USER_INSIGHTS[0]} />);

    expect(
      screen.getByText(
        /For the month of January,the highest spend was 3635.26, which was Juice - Concentrate/,
      ),
    ).toBeInTheDocument();
  });

  test('expand shows by default', async () => {
    render(<Insight insight={SAMPLE_USER_INSIGHTS[0]} />);

    const element = screen.getByText('Show More');
    expect(element).toBeInTheDocument();
  });

  test('expand on click', async () => {
    render(<Insight insight={SAMPLE_USER_INSIGHTS[0]} />);

    let element = screen.getByText('Show More');
    fireEvent.click(element);

    element = screen.getByText('Show Less');
    expect(element).toBeInTheDocument();
  });

  test('show graph on click', async () => {
    const { container } = render(<Insight insight={SAMPLE_USER_INSIGHTS[0]} />);

    const element = screen.getByText('Show More');
    fireEvent.click(element);

    const graphEl = screen.getByTestId('plotly-insight');
    expect(container).toContainElement(graphEl);
  });

  test('not collapsable', async () => {
    const { container } = render(<Insight insight={SAMPLE_USER_INSIGHTS[0]} collapsable={false} />);

    const element = screen.queryByText('Show More');
    expect(element).toBeNull();

    const graphEl = screen.getByTestId('plotly-insight');
    expect(container).toContainElement(graphEl);
  });
});
