import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WatchList extends React.Component  {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.retrieveWatchlist();
  }

  render () {
    const {watchlist} = this.props;
    const el = watchlist.map ( watchlist_item => (
      <Link to={`/assets/${watchlist_item.symbol}`}>
      <li className="watchlist-item">
        <div className="watchlist-item-detail-symbol">{watchlist_item.symbol}</div>
        <div className="watchlist-item-detail">Watching</div>
        <div className="watchlist-item-detail">${watchlist_item.last_price}</div>
      </li>
    </Link>
    ));
    return (
      <ul className="watchlist">
        <li className="watchlist-title">Watchlist</li>
        {el}
      </ul>
    );
  }
}

export default WatchList;
