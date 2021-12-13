import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import InsightsPanel from './InsightsPanel';
import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';

import { INSIGHT_ACTIONS } from '@/InsightCallout';
import InsightsPanelHeader from '@/InsightsPanelHeader';
import InsightsPanelTabs from '@/InsightsPanelTabs';
import InsightsPanelInsight from '@/InsightsPanelInsight';
import InsightsPanelFooter from '@/InsightsPanelFooter';

describe('Insights Panel', () => {
  test('renders children', async () => {
    render(
      <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[]}>
        <span>A child</span>
      </InsightsPanel>,
    );

    expect(screen.getByText('A child')).toBeInTheDocument();
  });

  describe('Insights Panel full working scenario', () => {
    test('pieces work together properly', async () => {
      const handleUninterested = jest.fn((insight, reason) => Promise.resolve());
      const handleInsightAction = jest.fn((action) => Promise.resolve());

      const { container } = render(
        <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[1]]}>
          <InsightsPanelHeader title="Insights Header"></InsightsPanelHeader>
          <InsightsPanelTabs />
          <InsightsPanelInsight onAction={handleInsightAction} />
          <InsightsPanelFooter onUninterested={handleUninterested} />
        </InsightsPanel>,
      );

      // Check length
      let steps = container.querySelectorAll('.MuiMobileStepper-dot');
      expect(steps).toHaveLength(SAMPLE_USER_INSIGHTS.length);

      let insight = screen.getByText(SAMPLE_USER_INSIGHTS[0].heading);
      expect(insight).toBeInTheDocument();

      // Expand insight
      let action = screen.getByText(/Show more/i);
      fireEvent.click(action);
      action = screen.getByText(/Show less/i);
      expect(action).toBeInTheDocument();

      // Move to next insight
      action = screen.getByRole('button', { name: /Next/i });
      fireEvent.click(action);

      insight = screen.getByText(SAMPLE_USER_INSIGHTS[1].heading);
      expect(insight).toBeInTheDocument();

      // Move back to previous insight
      action = screen.getByRole('button', { name: /Back/i });
      fireEvent.click(action);

      insight = screen.getByText(SAMPLE_USER_INSIGHTS[0].heading);
      expect(insight).toBeInTheDocument();

      // Click saved tab
      action = screen.getByRole('tab', { selected: false });
      fireEvent.click(action);

      // Uninterested not shown for saved insights
      expect(screen.queryByText('Not interested in this insight')).toBeNull();

      // Unsave insight
      insight = screen.getByText(SAMPLE_USER_INSIGHTS[1].heading);
      expect(insight).toBeInTheDocument();
      action = screen.getByRole('button', { name: /Remove/i });
      fireEvent.click(action);
      expect(handleInsightAction).toHaveBeenCalledWith(
        SAMPLE_USER_INSIGHTS[1],
        INSIGHT_ACTIONS.UNSAVE,
      );
      await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /Removing.../i }));

      steps = container.querySelectorAll('.MuiMobileStepper-dot');
      expect(steps).toHaveLength(0);

      // Click new tab
      action = screen.getByRole('tab', { selected: false });
      fireEvent.click(action);

      // Save insight
      insight = screen.getByText(SAMPLE_USER_INSIGHTS[0].heading);
      expect(insight).toBeInTheDocument();
      action = screen.getByRole('button', { name: /Save/i });
      fireEvent.click(action);
      expect(handleInsightAction).toHaveBeenCalledWith(
        SAMPLE_USER_INSIGHTS[0],
        INSIGHT_ACTIONS.SAVE,
      );
      await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /Saving.../i }));

      // Move to next insight
      action = screen.getByRole('button', { name: /Next/i });
      fireEvent.click(action);

      insight = screen.getByText(SAMPLE_USER_INSIGHTS[1].heading);
      expect(insight).toBeInTheDocument();

      // Mark as uninterested
      action = screen.getByText('Not interested in this insight');
      fireEvent.click(action);

      action = screen.getByRole('radio', {
        name: `Not interested in ${SAMPLE_USER_INSIGHTS[1].tags[1]}`,
      });
      fireEvent.click(action);
      action = screen.getByRole('button', { name: /submit/i });
      fireEvent.click(action);

      await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /submitting/i }));
      expect(handleUninterested).toHaveBeenCalledTimes(1);
      expect(handleUninterested.mock.calls[0][0]).toEqual(SAMPLE_USER_INSIGHTS[1]);
      expect(handleUninterested.mock.calls[0][1].filter_type).toEqual('tag');
      expect(handleUninterested.mock.calls[0][1].value).toEqual(SAMPLE_USER_INSIGHTS[1].tags[1]);

      // Check lengths of saved/new insights
      steps = container.querySelectorAll('.MuiMobileStepper-dot');
      expect(steps).toHaveLength(1);

      action = screen.getByRole('tab', { selected: false });
      fireEvent.click(action);

      steps = container.querySelectorAll('.MuiMobileStepper-dot');
      expect(steps).toHaveLength(1);
    }, 20000);
  });
});
