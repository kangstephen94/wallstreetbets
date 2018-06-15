import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WatchList extends React.Component  {
  constructor(props) {
    super(props);
    this.id = null;
  }

  componentDidMount () {
    this.props.retrieveWatchlist();
    this.id = setInterval(() => this.props.retrieveWatchlist(), 25000);
  }

  componentWillUnmount () {
    clearInterval(this.id);
    this.id = null;
  }


  render () {
    let el;
    const {payload} = this.props;
    if (Object.keys(payload).length !== 0) {
      const data = payload.data;
    el = Object.values(payload.watchlist).map ( (watchlistItem,idx) => (
      <Link key={idx} to={`/assets/${watchlistItem.symbol}`}>
      <li key={idx} className="watchlist-item">
        <div className="watchlist-item-detail-symbol">{watchlistItem.symbol}</div>
        <div className="watchlist-item-detail">Watching</div>
        <div className="watchlist-item-detail">{Number(data[watchlistItem.symbol]["2. price"])}</div>
      </li>
    </Link>
    ));
  }
    return (
      <ul className="watchlist">
        <li className="watchlist-title">Watchlist</li>
        {el}
      </ul>
    );
  }
}

export default WatchList;
