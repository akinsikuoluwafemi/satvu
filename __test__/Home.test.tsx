import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from '../src/pages/Home';
import { server } from '../mocks/mockServiceWorker';

import '@testing-library/jest-dom/extend-expect';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Home', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/initial']}>
        <Home />
      </MemoryRouter>,
    );
  });
  test('renders without crashing', () => {
    expect(screen.getByTestId('locations-heading')).toBeInTheDocument();
  });
});
