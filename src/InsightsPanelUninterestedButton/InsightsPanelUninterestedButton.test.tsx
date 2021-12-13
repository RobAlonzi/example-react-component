import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InsightsPanelUninterestedButton from './InsightsPanelUninterestedButton';

describe('InsightPanel Uninterested Button', () => {
  test('renders', async () => {
    const onClickCallback = jest.fn();

    render(<InsightsPanelUninterestedButton onClick={onClickCallback} />);
  });

  test('onClick fires properly', async () => {
    const onClickCallback = jest.fn();

    render(<InsightsPanelUninterestedButton onClick={onClickCallback} />);

    const btn = screen.getByRole('button', { name: /interested/i });
    fireEvent.click(btn);

    expect(onClickCallback).toHaveBeenCalled();
  });
});
