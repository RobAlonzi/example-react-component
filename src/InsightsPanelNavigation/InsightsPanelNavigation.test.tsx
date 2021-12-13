import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import InsightsPanelNavigation from './InsightsPanelNavigation';

describe('InsightPanel Navigation', () => {
  test('renders', async () => {
    const onPreviousCallback = jest.fn();
    const onNextCallback = jest.fn();

    render(
      <InsightsPanelNavigation
        previousDisabled={false}
        nextDisabled={true}
        onPrevious={onPreviousCallback}
        onNext={onNextCallback}
      />,
    );
  });

  test('disables work', async () => {
    const onPreviousCallback = jest.fn();
    const onNextCallback = jest.fn();

    render(
      <InsightsPanelNavigation
        previousDisabled={true}
        nextDisabled={true}
        onPrevious={onPreviousCallback}
        onNext={onNextCallback}
      />,
    );

    const backBtn = screen.getByRole('button', { name: /back/i });
    const nextBtn = screen.getByRole('button', { name: /next/i });

    fireEvent.click(backBtn);
    fireEvent.click(nextBtn);

    expect(backBtn).toBeDisabled();
    expect(onPreviousCallback).not.toHaveBeenCalled();
    expect(nextBtn).toBeDisabled();
    expect(onNextCallback).not.toHaveBeenCalled();
  });

  test('back button fires onPrevious', async () => {
    const onPreviousCallback = jest.fn();
    const onNextCallback = jest.fn();

    render(
      <InsightsPanelNavigation
        previousDisabled={false}
        nextDisabled={true}
        onPrevious={onPreviousCallback}
        onNext={onNextCallback}
      />,
    );

    const backBtn = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backBtn);

    expect(onPreviousCallback).toHaveBeenCalled();
  });

  test('next button fires onNext', async () => {
    const onPreviousCallback = jest.fn();
    const onNextCallback = jest.fn();

    render(
      <InsightsPanelNavigation
        previousDisabled={false}
        nextDisabled={false}
        onPrevious={onPreviousCallback}
        onNext={onNextCallback}
      />,
    );

    const backBtn = screen.getByRole('button', { name: /next/i });
    fireEvent.click(backBtn);

    expect(onNextCallback).toHaveBeenCalled();
  });
});
