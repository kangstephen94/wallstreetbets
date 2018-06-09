import React from 'react';

export const SearchResults = (props) => {

  const {searchResults} = props;
  return (
    <ul className='search-result animate dropdown' >
      {searchResults.map (asset => <li className='searched-assets' key={asset.id} >{asset.name}</li>)}
    </ul>
  );
};