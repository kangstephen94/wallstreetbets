import React from 'react';
import { Link } from 'react-router-dom';

export const SearchResults = (props) => {

  const {searchResults} = props;
  return (
    <ul id='search-result' style={{display: 'none'}} >
      {searchResults.map (asset => {
        return (
          <Link to={`/assets/${asset.symbol}`} className='searched-assets' key={asset.id} >
          <li className="search-elements">
            {asset.name}
            <p>{asset.symbol}</p>
          </li>
          </Link>
        );
      })
    }
    </ul>
  );
};
