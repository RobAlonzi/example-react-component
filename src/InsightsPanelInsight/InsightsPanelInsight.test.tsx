import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import InsightsPanel from '@/InsightsPanel';
import { INSIGHT_ACTIONS } from '@/InsightCallout';
import InsightsPanelInsight from './InsightsPanelInsight';
import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';

describe('InsightPanel Insight', () => {
  test('renders', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightsPanelInsight onAction={() => Promise.resolve()} />
      </InsightsPanel>,
    );
  });

  test('renders callout', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightsPanelInsight onAction={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    expect(screen.getByText(SAMPLE_USER_INSIGHTS[0].title)).toBeInTheDocument();
  });

  test('renders insight', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightsPanelInsight onAction={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    expect(screen.getByText(SAMPLE_USER_INSIGHTS[0].heading)).toBeInTheDocument();
  });

  test('renders correct button text when unsaved', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[1]]}>
        <InsightsPanelInsight onAction={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    const btn = screen.getByRole('button', { name: /Save/i });
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /Saving/i }));
  });

  test('renders correct button text when saved', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[0]]}>
        <InsightsPanelInsight onAction={() => Promise.resolve()} />
      </InsightsPanel>,
    );

    const btn = screen.getByRole('button', { name: /Remove/i });
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /Removing/i }));
  });

  test('fires callback correctly', async () => {
    const callback = jest.fn(() => Promise.resolve());

    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[1]]}>
        <InsightsPanelInsight onAction={callback} />
      </InsightsPanel>,
    );

    const btn = screen.getByRole('button', { name: /Save/i });
    fireEvent.click(btn);

    expect(callback).toBeCalledWith(SAMPLE_USER_INSIGHTS[0], INSIGHT_ACTIONS.SAVE);
    await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /Saving/i }));

    fireEvent.click(btn);
    expect(callback).toBeCalledWith(SAMPLE_USER_INSIGHTS[0], INSIGHT_ACTIONS.UNSAVE);
    await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /Removing/i }));
  });
});
