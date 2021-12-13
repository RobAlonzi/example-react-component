import React from 'react';
import { render, screen } from '@testing-library/react';
import InsightsPanelHeader from './InsightsPanelHeader';

describe('Insights Panel Header', () => {
  test('renders title', async () => {
    render(
      <InsightsPanelHeader title="A title">
        <span>A child</span>
      </InsightsPanelHeader>,
    );

    expect(screen.getByText('A title')).toBeInTheDocument();
  });

  test('renders children', async () => {
    render(
      <InsightsPanelHeader title="A title">
        <span>first child</span>
        second child
        <div>third child</div>
      </InsightsPanelHeader>,
    );

    expect(screen.getByText('first child')).toBeInTheDocument();
    expect(screen.getByText('second child')).toBeInTheDocument();
    expect(screen.getByText('third child')).toBeInTheDocument();
  });
});
