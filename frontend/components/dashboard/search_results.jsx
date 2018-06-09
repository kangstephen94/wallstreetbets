import React from 'react';

export const SearchResults = (props) => {

  const {searchResults} = props;
  return (
    <ul className='search-result animate slideInDown' >
      {searchResults.map (asset => <Link to={`/assets/${asset.symbol}`} className='searched-assets' key={asset.id} >{asset.name}</Link>)}
    </ul>
  );
};
