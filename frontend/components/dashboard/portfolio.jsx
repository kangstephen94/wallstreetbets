import React from 'react';
import  TwoLevelPieChartContainer from './piechart';
import  TwoLevelPieChartContainer2 from './piechart2';
import { Link, withRouter } from 'react-router-dom';

class Portfolio extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    this.props.retrieveHoldings();
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  render () {
    const {payload, watchlist} = this.props;
    let buyingPower;
    let portfolioValue;
    let assetIds;
    let holdings;
    let assets;
    let holdings2;
    let el;
    let total='$100000';
    let currentPrices;
    if ((payload && !Number.isInteger(payload)) && (!this.isEmpty(watchlist)))
    {
      assets = Object.values(payload.assets);
      holdings = Object.values(payload.holdings);
      holdings2 = payload.holdings2;
      buyingPower = payload.buying_power;
      portfolioValue = payload.portfolio_value;
      total = buyingPower + portfolioValue;
      currentPrices = watchlist.data;
      el = assets.map (asset => (
        <Link to={`/assets/${asset.symbol}`}>
        <li className="holdings">
          <div className="holdings-asset">{asset.name}</div>
          <div className="holdings-asset">{asset.symbol}</div>
          <div className="holdings-asset">${asset.last_price}</div>
          <div className="holdings-asset">${Number.parseFloat(currentPrices[asset.symbol]["2. price"])}</div>
          <div className="holdings-asset">{((((currentPrices[asset.symbol]["2. price"])/asset.last_price)-1)*100).toPrecision(2)}%</div>
          <div className="holdings-asset">{holdings2[asset.id]}</div>
        </li>
      </Link>
      ));
    } else {
      el = <div>Loading...</div>;
    }


    return (
      <div className='portfolio'>
        <div className="portfolio-details">
          <h1 className='total-assets'>Current Portfolio Value
             <p id="portfolio-total">${total}</p>
           </h1>
        </div>
        <div className='piecharts'>
        <TwoLevelPieChartContainer/>
        <TwoLevelPieChartContainer2/>
        </div>
      <ul className='portfolio-chart'>
        <li className='holdings-title-header'>
      <div className="holdings-title">Company</div>
      <div className="holdings-title">Symbol</div>
      <div className="holdings-title">Purchase Price</div>
      <div className="holdings-title">Current Price</div>
      <div className="holdings-title">Percent Gain/Loss</div>
      <div className="holdings-title">Shares</div>
      </li>
        {el}
      </ul>
    </div>
    );
  }
}

export default Portfolio;
