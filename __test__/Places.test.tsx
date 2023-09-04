import React from 'react';
import { render, screen } from '@testing-library/react';

import Places from '../src/components/Places';
import { PlacesDataProps } from '../src/types';
import { MOCKED_RESPONSE } from '../src/utils';

import '@testing-library/jest-dom/extend-expect';

describe('Places', () => {
  let suggestions: PlacesDataProps;

  test('renders without crashing', () => {
    suggestions = MOCKED_RESPONSE;
    render(<Places suggestion={suggestions} />);
    expect(screen.getByTestId('suggestion-card')).toBeInTheDocument();
  });

  test('doesnt render if suggestions are empty', () => {
    suggestions = [];
    render(<Places suggestion={suggestions} />);
    expect(screen.getByTestId('no-suggestions')).toBeInTheDocument();
  });
});
