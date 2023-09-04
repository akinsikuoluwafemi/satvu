import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';

import SearchField from '../src/components/SearchField';

import '@testing-library/jest-dom/extend-expect';

describe('SearchField', () => {
  const searchValue = 'Lagos';
  const setSearchValue = jest.fn();
  const handleSubmit = jest.fn();
  const handleKeyDown = jest.fn();
  const history: MemoryHistory = createMemoryHistory();
  let inputField: Node | Window,
    submitButton: Node | Window,
    searchForm: Node | Window;

  beforeEach(() => {
    render(
      <SearchField
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
      />,
    );
  });

  // Assert that the input field (textbox) is present
  test('input field is in the document', async () => {
    inputField = await waitFor(() => screen.getByTestId('search-input'));
    expect(inputField).toBeInTheDocument();
  });

  test('submit button is in the document', async () => {
    submitButton = await waitFor(() => screen.getByTestId('search-button'));
    expect(submitButton).toBeInTheDocument();
  });

  test('field changes when user types', async () => {
    inputField = await waitFor(() => screen.getByTestId('search-input'));
    fireEvent.change(inputField, { target: { value: 'NewYork' } });
    expect(setSearchValue).toHaveBeenCalledTimes(1);
  });

  test('doesnt submit if the user doesnt put in a search value', async () => {
    inputField = await waitFor(() => screen.getByTestId('search-input'));
    fireEvent.change(inputField, { target: { value: '' } });
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    expect(handleKeyDown).toHaveBeenCalledTimes(0);
  });

  test('when user fires onkeydown event on inputField, handleKeyDown func fires', async () => {
    inputField = await waitFor(() => screen.getByTestId('search-input'));
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  test('submits form if user puts in a value', async () => {
    searchForm = await waitFor(() => screen.getByTestId('search-form'));
    inputField = await waitFor(() => screen.getByTestId('search-input'));
    fireEvent.change(inputField, { target: { value: 'NewYork' } });
    expect(inputField).not.toHaveValue(''); // input field is not empty
    fireEvent.submit(searchForm);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  test('URL parameter testing', () => {
    history.push('/?q=London');
    expect(history.location.search).toBe('?q=London');
    expect(history.location.pathname).toBe('/');
  });

  test('when user fires onkeydown event on inputField, URL parameter gets removed', async () => {
    inputField = await waitFor(() => screen.getByTestId('search-input'));
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });
    history.push('/?q=');
    expect(history.location.search).toBe('?q=');
  });
});
