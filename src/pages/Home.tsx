import React, {
  useEffect,
  useState,
  FormEvent,
  KeyboardEventHandler,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import Places from '../components/Places';
import SearchField from '../components/SearchField';

import { fetchLocations } from '../utils';
import { PlacesDataProps } from '../types';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestion, setSuggestion] = useState<PlacesDataProps>([]);

  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  useEffect(() => {
    if (!query) return;

    const fetchLocationFromParam = async () => {
      setSearchValue(query);
      const locations: PlacesDataProps = await fetchLocations(query);
      setSuggestion(locations);
    };
    fetchLocationFromParam();
  }, [query]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!searchValue) {
        enqueueSnackbar('No search query', { variant: 'error' });
        return;
      }
      enqueueSnackbar('Searching...', { variant: 'info' });
      const locations = await fetchLocations(searchValue);
      setSuggestion(locations);
      enqueueSnackbar('Search successful', { variant: 'success' });
      setSearchValue('');
    } catch (err: unknown) {
      enqueueSnackbar('Search failed', { variant: 'error' });
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      searchParams.set('q', ''); //set the query string to empty
      history.pushState(null, '', `?${searchParams.toString()}`);
    }
  };

  return (
    <div className="container">
      <div className="search-field">
        <SearchField
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
        />
      </div>
      <h1 data-testid="locations-heading">Locations</h1>
      <div className="main">
        <Places suggestion={suggestion} />
      </div>
    </div>
  );
};

export default Home;
