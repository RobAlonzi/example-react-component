import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import InsightShareForm from './InsightShareForm';
import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';

describe('InsightPanelShare', () => {
  test('renders', async () => {
    render(
      <InsightShareForm
        insight={SAMPLE_USER_INSIGHTS[0]}
        onCancel={() => true}
        onSubmit={() => true}
        loading={false}
        open={true}
      />,
    );
  });
  test('modal visible when open is true', async () => {
    render(
      <InsightShareForm
        insight={SAMPLE_USER_INSIGHTS[0]}
        onCancel={() => true}
        onSubmit={() => true}
        loading={false}
        open={true}
      />,
    );

    expect(screen.getByRole('textbox', { name: 'email' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'message' })).toBeVisible();
  });

  test('onCancel works correctly', async () => {
    const callback = jest.fn();

    render(
      <InsightShareForm
        insight={SAMPLE_USER_INSIGHTS[0]}
        onCancel={callback}
        onSubmit={() => true}
        loading={false}
        open={true}
      />,
    );

    const action = screen.getByRole('button', { name: /Cancel/i });
    fireEvent.click(action);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('onSubmit works correctly', async () => {
    const callback = jest.fn();

    render(
      <InsightShareForm
        insight={SAMPLE_USER_INSIGHTS[0]}
        onCancel={() => true}
        onSubmit={callback}
        loading={false}
        open={true}
      />,
    );

    fireEvent.change(screen.getByRole('textbox', { name: 'email' }).querySelector('input')!, {
      target: { value: 'test@test.com' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: 'message' }).querySelector('textarea')!, {
      target: { value: 'test message' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() =>
      expect(callback).toHaveBeenCalledWith({
        email: 'test@test.com',
        message: 'test message',
        insight: SAMPLE_USER_INSIGHTS[0],
        image: '',
      }),
    );
  });

  test('onSubmit does not fire when form invalid', async () => {
    const callback = jest.fn();

    render(
      <InsightShareForm
        insight={SAMPLE_USER_INSIGHTS[0]}
        onCancel={() => true}
        onSubmit={callback}
        loading={false}
        open={true}
      />,
    );

    fireEvent.change(screen.getByRole('textbox', { name: 'email' }).querySelector('input')!, {
      target: { value: 'testtest.com' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: 'message' }).querySelector('textarea')!, {
      target: { value: 'test message' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() =>
      expect(screen.getByRole('textbox', { name: 'email' }).querySelector('input')!).toBeInvalid(),
    );

    expect(callback).not.toHaveBeenCalled();
  });
});
