import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import InsightsPanelUninterestedForm from './InsightsPanelUninterestedForm';
import { SAMPLE_USER_INSIGHTS } from '@/utils/mocks';

describe('InsightPanel Uninterested Form', () => {
  test('renders', async () => {
    const onSubmitCallback = jest.fn();
    const onCancelCallback = jest.fn();

    const { categories, tags } = SAMPLE_USER_INSIGHTS[0];

    render(
      <InsightsPanelUninterestedForm
        loading={false}
        categories={categories}
        tags={tags}
        onSubmit={onSubmitCallback}
        onCancel={onCancelCallback}
      />,
    );
  });

  test('renders options properly', async () => {
    const onSubmitCallback = jest.fn();
    const onCancelCallback = jest.fn();

    const { categories, tags } = SAMPLE_USER_INSIGHTS[0];

    render(
      <InsightsPanelUninterestedForm
        loading={false}
        type="Type"
        categories={categories}
        tags={tags}
        onSubmit={onSubmitCallback}
        onCancel={onCancelCallback}
      />,
    );

    ['Type', ...categories, ...tags].forEach((item) => {
      expect(screen.getByText(`Not interested in ${item}`)).toBeInTheDocument();
    });
  });

  test('fires cancel event', async () => {
    const onSubmitCallback = jest.fn();
    const onCancelCallback = jest.fn();

    const { categories, tags } = SAMPLE_USER_INSIGHTS[0];

    render(
      <InsightsPanelUninterestedForm
        loading={false}
        type="Type"
        categories={categories}
        tags={tags}
        onSubmit={onSubmitCallback}
        onCancel={onCancelCallback}
      />,
    );

    const btn = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(btn);

    expect(onCancelCallback).toHaveBeenCalled();
  });

  test('fires submit event', async () => {
    const onSubmitCallback = jest.fn();
    const onCancelCallback = jest.fn();
    const { categories, tags } = SAMPLE_USER_INSIGHTS[0];

    render(
      <InsightsPanelUninterestedForm
        loading={false}
        type="Type"
        categories={categories}
        tags={tags}
        onSubmit={onSubmitCallback}
        onCancel={onCancelCallback}
      />,
    );

    const radioBtn = screen.getByRole('radio', { name: `Not interested in ${tags[1]}` });
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(radioBtn);
    fireEvent.click(submitBtn);

    expect(onSubmitCallback).toHaveBeenCalledTimes(1);
    expect(onSubmitCallback.mock.calls[0][0].filter_type).toEqual('tag');
    expect(onSubmitCallback.mock.calls[0][0].value).toEqual(tags[1]);
  });

  test('loading', async () => {
    const onSubmitCallback = jest.fn();
    const onCancelCallback = jest.fn();
    const { categories, tags } = SAMPLE_USER_INSIGHTS[0];

    render(
      <InsightsPanelUninterestedForm
        loading={true}
        type="Type"
        categories={categories}
        tags={tags}
        onSubmit={onSubmitCallback}
        onCancel={onCancelCallback}
      />,
    );

    const submitBtn = screen.getByRole('button', { name: /submitting/i });
    fireEvent.click(submitBtn);

    expect(submitBtn).toBeDisabled();
    expect(onSubmitCallback).not.toHaveBeenCalled();
  });
});
