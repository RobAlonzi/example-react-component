import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InsightCallout from './InsightCallout';

describe('Insight', () => {
  test('renders title', async () => {
    render(
      <InsightCallout buttonText="Save" title="Some Title" loading={false} onClick={() => {}} />,
    );

    expect(screen.getByText('Some Title')).toBeInTheDocument();
  });

  test('renders buttonText', async () => {
    render(
      <InsightCallout buttonText="Save" title="Some Title" loading={false} onClick={() => {}} />,
    );

    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  test('disabled on loading', async () => {
    render(
      <InsightCallout buttonText="Save" title="Some Title" loading={true} onClick={() => {}} />,
    );

    const element = screen.getByText('Save').closest('button');
    expect(element).toBeDisabled();
  });

  test('fire onClick', async () => {
    const onClickMock = jest.fn();

    render(
      <InsightCallout buttonText="Save" title="Some Title" loading={false} onClick={onClickMock} />,
    );

    const element = screen.getByText('Save').closest('button');

    if (element) {
      fireEvent.click(element);
    }

    expect(onClickMock).toHaveBeenCalled();
  });
});
