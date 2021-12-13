import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InsightsPanel from '@/InsightsPanel';
import InsightPanelFooter from './InsightsPanelFooter';
import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';

describe('InsightPanel Footer', () => {
  test('renders', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightPanelFooter onUninterested={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    expect(screen.getByTestId('insights-panel-footer')).toBeInTheDocument();
  });

  test('opens uninterested form when clicked', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightPanelFooter onUninterested={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    const buttonEl = screen.getByText('Not interested in this insight');
    fireEvent.click(buttonEl);

    expect(screen.getByText('Why are you not interested?')).toBeInTheDocument();
  });

  test('uninterested form is populated correctly', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightPanelFooter onUninterested={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    const buttonEl = screen.getByText('Not interested in this insight');
    fireEvent.click(buttonEl);

    [...SAMPLE_USER_INSIGHTS[0].tags, ...SAMPLE_USER_INSIGHTS[0].categories].forEach((item) => {
      expect(screen.getByText(`Not interested in ${item}`)).toBeInTheDocument();
    });
  });

  test('correct number of steps are shown', async () => {
    const { container } = render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightPanelFooter onUninterested={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    const steps = container.querySelectorAll('.MuiMobileStepper-dot');
    expect(steps).toHaveLength(SAMPLE_USER_INSIGHTS.length);
  });

  test('footer collapes correctly', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightPanelFooter onUninterested={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    const notInterestedBtn = screen.getByText('Not interested in this insight');
    fireEvent.click(notInterestedBtn);
    expect(screen.queryByText('Not interested in this insight')).toBeNull();

    const cancelBtn = screen.getByRole('button', { name: /Cancel/i });
    fireEvent.click(cancelBtn);

    expect(screen.getByText('Not interested in this insight')).toBeInTheDocument();
  });
});
