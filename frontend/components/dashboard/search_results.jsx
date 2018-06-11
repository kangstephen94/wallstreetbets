import React from 'react';
import { Link } from 'react-router-dom';

export const SearchResults = (props) => {

  const {searchResults} = props;
  return (
    <ul id='search-result' style={{display: 'none'}} >
      {searchResults.map (asset => <li><Link to={`/assets/${asset.symbol}`} className='searched-assets' key={asset.id} >{asset.name}</Link></li>)}
    </ul>
  );
};
