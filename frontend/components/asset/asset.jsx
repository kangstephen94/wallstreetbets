import React from 'react';
import NavBarContainer from '../dashboard/navbar_container';
import AssetChartContainer from './asset_chart_container';
import SellBuyContainer from './buy_sell_container';


class Asset extends React.Component {
  constructor (props) {
    super(props);
    this.state = {func: 'TIME_SERIES_1D'};
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.sym !== nextProps.match.params.sym) {
      this.props.clearData();
      this.setState({func: 'TIME_SERIES_1D'});
      this.props.retrieveAsset(nextProps.match.params.sym);
    }
  }

  componentWillUnmount () {
    this.props.clearData();
  }

  componentDidMount () {
    this.props.retrieveAsset(this.props.match.params.sym);

  }

  handleClick (e) {
    this.setState({func: e.target.value});
    this.props.retrieveData(this.props.match.params.sym, e.target.value);
  }


  render () {
    const {asset} = this.props;
    if (asset) {
      var name = asset.name;
      var symbol = asset.symbol;
      var marketCap = asset.market_cap;
      var ipoYear = asset.ipo_year;
      var industry = asset.industry;
      var sector = asset.sector;
    }

    return (
      <div className="show-asset">
        <NavBarContainer />
        <div className="asset-content">
          <h1>{name}</h1>
          <div className="buy-sell-flex">
            <div className="chart-container">
              <AssetChartContainer />

              <div className="option-container">
                <ul className="chart-options">
                  <li className={this.state.func == 'TIME_SERIES_1D' ? 'selected' : ''}>
                    <button
                      onClick={this.handleClick}
                      value='TIME_SERIES_1D'>
                      1D</button>
                  </li>
                  <li className={this.state.func == 'TIME_SERIES_1W' ? 'selected' : ''}>
                    <button
                      onClick={this.handleClick}
                      value='TIME_SERIES_1W'>
                      1W</button>
                  </li>
                  <li className={this.state.func == 'TIME_SERIES_1M' ? 'selected' : ''}>
                    <button
                      onClick={this.handleClick}
                      value='TIME_SERIES_1M'>
                      1M</button>
                  </li>
                  <li className={this.state.func == 'TIME_SERIES_1Y' ? 'selected' : ''}>
                    <button
                      onClick={this.handleClick}
                      value='TIME_SERIES_1Y'>
                      1Y</button>
                  </li>
                </ul>
              </div>


            </div>
            <SellBuyContainer />
          </div>
          <ul className="asset-details1">
            <li>
              <p className="title">Company:</p>
              <p>{name}</p>
            </li>
            <li>
              <p className="title">Symbol:</p>
              <p>{symbol}</p>
            </li>
            <li>
              <p className="title">Market Cap:</p>
              <p>{marketCap}</p>
            </li>
          </ul>

          <ul className="asset-details2">
              <li>
                <p className="title">IPO Year:</p>
                <p>{ipoYear}</p>
              </li>
              <li>
                <p className="title">Industry:</p>
                <p>{industry}</p>
              </li>
              <li>
                <p className="title">Sector:</p>
                <p>{sector}</p>
              </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Asset;
