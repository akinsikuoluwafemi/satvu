import React, { FC } from 'react';

import { PlacesDataProps } from '../types';

type PlacesProps = {
  suggestion: PlacesDataProps;
};
const Places: FC<PlacesProps> = ({ suggestion }) => {
  const renderSuggestions =
    suggestion.length > 0 ? (
      suggestion?.map((list) => {
        return (
          <div
            data-testid="suggestion-card"
            className="suggestion-card"
            key={list.place_id}
          >
            <p>
              Name: <strong>{list.display_name}</strong>
            </p>
            <div>
              <p>
                Lat: <strong>{list.lat}</strong>
              </p>
              <p>
                Lon: <strong>{list.lon}</strong>
              </p>
              <p>
                Category:<strong>{list.category}</strong>
              </p>
              <p>
                Place Rank: <strong>{list.place_rank}</strong>
              </p>
              <p>
                Importance: <strong>{list.importance}</strong>
              </p>
              <p>
                Type: <strong>{list.type}</strong>
              </p>
            </div>
          </div>
        );
      })
    ) : (
      <p data-testid="no-suggestions">No suggestions</p>
    );

  return <div>{renderSuggestions}</div>;
};

export default Places;
