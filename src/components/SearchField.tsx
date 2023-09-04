import React, { FC, FormEvent, KeyboardEventHandler } from 'react';

type SearchFieldProps = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleKeyDown: KeyboardEventHandler<HTMLInputElement>;
};

const SearchField: FC<SearchFieldProps> = ({
  searchValue,
  setSearchValue,
  handleSubmit,
  handleKeyDown,
}) => {
  return (
    <nav>
      <form
        data-testid="search-form"
        className="search-form"
        onSubmit={handleSubmit}
      >
        <input
          data-testid="search-input"
          className="search-input"
          type="text"
          placeholder="Search for a place"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          aria-label="Search"
          onKeyDown={handleKeyDown}
        />
        <button
          data-testid="search-button"
          className="search-button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </nav>
  );
};

export default SearchField;
