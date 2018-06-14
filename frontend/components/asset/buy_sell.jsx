import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BuySell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset_id: this.props.asset.id,
      portfolio_id: this.props.currentUser.id,
      amount: 0,
      price_purchased: this.props.asset.last_price,
      side: 'Buy'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBuySell = this.handleBuySell.bind(this);
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    this.props.buyAsset({
      asset_id: 1,
      portfolio_id: 11,
      amount: 0,
      price_purchased: 0,
      side: 'Buy'
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update (e) {
    this.setState({amount: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.buyAsset(this.state);
    this.setState({amount: 0});
  }

  handleBuySell (e) {
    this.setState({side: e.target.value, amount: 0});
  }

  handleClick (e) {
    e.preventDefault();
    this.props.addToWatchlist(this.props.asset);
  }

  render () {
    const {asset, totalStock} = this.props;
    let el;
    let el2;

    if (this.state.side === "Buy") {
      el = (
        <div className="estimated">
          <p>Estimated Cost</p>
          <p id="cost">${this.state.amount * this.state.price_purchased}</p>
        </div>
      );
      el2 = (
        <p className="buying-power">${this.props.currentUser.buying_power.toFixed(2)} Buying Power Available</p>

      );
    } else {
      el = (
      <div className="estimated">
        <p>Estimated Credit</p>
        <p id="cost">${this.state.amount * this.state.price_purchased}</p>
      </div>
      );
      el2 = (
        <p className="buying-power">{totalStock} available shares</p>
      );
    }
    return (
      <div>
      <div className="buysell">
        <div className='buy-sell-option'>
        <button
          className={this.state.side === "Buy" ? "buysell-button-active" : "buysell-button"}
          onClick={this.handleBuySell}
          value="Buy">Buy {asset.symbol}
        </button>
        <button
          className={this.state.side === "Buy" ? "buysell-button" : "buysell-button-active"}
          type='submit'
          onClick={this.handleBuySell}
          value="Sell"
          >Sell {asset.symbol}
          </button>
      </div>
      <form className="shares">
          <label htmlFor="amount">Shares</label>
            <input
              id='amount'
              type='text'
              value={this.state.amount}
              onChange={this.update}
              />
      </form>
      <div className="marketprice">
        <p>Market Price</p>
        <p className='last-price'>${asset.last_price}</p>
      </div>
      {el}
      <button onClick={this.handleSubmit} className="submit-order">Submit Order</button>
      {el2}
      {this.renderErrors()}
      </div>
      <button
        className="add-watchlist-item"
        onClick={this.handleClick}
        >Add to Watchlist
      </button>
      </div>
    );
  }

}

export default withRouter(BuySell);
