import React from 'react';
import { getByText, render, screen, fireEvent } from '@testing-library/react';

import InsightsPanel, { INSIGHT_PANEL_TAB_VALUES } from '@/InsightsPanel';
import InsightsPanelTabs from './InsightsPanelTabs';
import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';

describe('Insights Panel Header', () => {
  test('renders', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[1]]}>
        <InsightsPanelTabs />
      </InsightsPanel>,
    );

    expect(screen.getByText(INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS)).toBeInTheDocument();
    expect(screen.getByText(INSIGHT_PANEL_TAB_VALUES.SAVED_INSIGHTS)).toBeInTheDocument();
  });

  test('selected is correct', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[1]]}>
        <InsightsPanelTabs />
      </InsightsPanel>,
    );

    // Check New Insights
    let buttonEl = screen.getByRole('tab', { selected: true });
    expect(buttonEl).not.toBeNull();
    expect(getByText(buttonEl, INSIGHT_PANEL_TAB_VALUES.NEW_INSIGHTS)).not.toBeNull();
  });

  test('onChange does not fire if selected is clicked', async () => {
    const onChangeMock = jest.fn();

    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[1]]}>
        <InsightsPanelTabs onChange={onChangeMock} />
      </InsightsPanel>,
    );

    const buttonEl = screen.getByRole('tab', { selected: true });
    fireEvent.click(buttonEl);

    expect(onChangeMock).not.toHaveBeenCalled();
  });

  test('onChange fires if non-selected is clicked', async () => {
    const onChangeMock = jest.fn();

    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[1]]}>
        <InsightsPanelTabs onChange={onChangeMock} />
      </InsightsPanel>,
    );

    const buttonEl = screen.getByRole('tab', { selected: false });
    fireEvent.click(buttonEl);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(INSIGHT_PANEL_TAB_VALUES.SAVED_INSIGHTS);
  });
});
