import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InsightsPanel from '@/InsightsPanel';
import InsightsPanelShare from './InsightsPanelShare';
import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';

describe('InsightPanelShare', () => {
  test('renders', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightsPanelShare onShare={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    expect(screen.getByRole('button', { name: /Share by email/i })).toBeInTheDocument();
  });

  test('opens modal when clicked', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightsPanelShare onShare={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    const buttonEl = screen.getByRole('button', { name: /Share by email/i });
    fireEvent.click(buttonEl);

    expect(screen.getByTestId('share-form')).toBeInTheDocument();
  });

  test('cancel hides the modal', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightsPanelShare onShare={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    let action = screen.getByRole('button', { name: /Share by email/i });
    fireEvent.click(action);

    action = screen.getByRole('button', { name: /Cancel/i });
    fireEvent.click(action);

    expect(action).not.toBeVisible();
  });
});
