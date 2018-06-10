import React from 'react';

export const SearchResults = (props) => {

  const {searchResults} = props;
  return (
    <ul id='search-result' style={{display: 'none'}} >
      {searchResults.map (asset => <li className='searched-assets' key={asset.id} >{asset.name}</li>)}
    </ul>
  );
};
