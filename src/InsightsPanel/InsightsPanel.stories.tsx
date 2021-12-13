import React from 'react';
import { Story, Meta } from '@storybook/react';
import IconButton from '@material-ui/core/IconButton';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';
import { UserInsight } from '@/Insight';
import InsightsPanel, { InsightsPanelProps } from '@/InsightsPanel';
import InsightsPanelHeader from '@/InsightsPanelHeader';
import InsightsPanelTabs from '@/InsightsPanelTabs';
import InsightsPanelInsight from '@/InsightsPanelInsight';
import InsightsPanelShare, { InsightsPanelSubmitProps } from '@/InsightsPanelShare';
import InsightsPanelFooter from '@/InsightsPanelFooter';

const Template: Story<React.PropsWithChildren<InsightsPanelProps>> = (args) => {
  return <InsightsPanel {...args} />;
};

export const Default: Story<React.PropsWithChildren<InsightsPanelProps>> = ({}) => {
  function handlePreferencesClick() {
    console.log('Clicked!');
  }

  async function handleUninterested(insight: UserInsight): Promise<void> {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    });
  }

  async function handleInsightAction(insight: UserInsight, action: string): Promise<void> {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    });
  }

  async function handleInsightShare(values: InsightsPanelSubmitProps): Promise<void> {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    });
  }

  return (
    <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[1]]}>
      <InsightsPanelHeader title="Insights">
        <IconButton aria-label="insights preferences">
          <SettingsOutlinedIcon onClick={handlePreferencesClick} />
        </IconButton>
      </InsightsPanelHeader>
      <InsightsPanelTabs />
      <InsightsPanelInsight onAction={handleInsightAction} />
      <InsightsPanelShare onShare={handleInsightShare} />
      <InsightsPanelFooter onUninterested={handleUninterested} />
    </InsightsPanel>
  );
};

export default {
  component: InsightsPanel,
  decorators: [
    (Story) => {
      document.querySelector('html')!.setAttribute('style', 'height: 100%;');
      document.querySelector('body')!.setAttribute('style', 'height: 100%;');
      document.querySelector('#root')!.setAttribute('style', 'height: 100%;');
      return (
        <div style={{ width: 550, margin: '0 auto', height: '100%' }}>
          <Story />
        </div>
      );
    },
  ],
  subcomponents: {
    InsightsPanelHeader,
    InsightsPanelTabs,
    InsightsPanelInsight,
    InsightsPanelFooter,
  },
  title: 'Insights / Insights Panel',
  argTypes: {},
} as Meta;
