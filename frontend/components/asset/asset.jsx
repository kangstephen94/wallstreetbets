import React from 'react';
import NavBarContainer from '../dashboard/navbar_container';
import AssetChartContainer from './asset_chart_container';


class Asset extends React.Component {
  constructor (props) {
    super(props);
    this.state = {func: 'TIME_SERIES_1D'};
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.sym !== nextProps.match.params.sym) {
      this.props.retrieveAsset(nextProps.match.params.sym);
      this.props.retrieveData(nextProps.match.params.sym, 'TIME_SERIES_1D');
    }
  }

  componentDidMount () {
    this.props.retrieveAsset(this.props.match.params.sym);
    this.props.retrieveData(this.props.match.params.sym, 'TIME_SERIES_1D');
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
          <div className="chart-container">
            <AssetChartContainer />

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
          <ul className="asset-details">
            <li>Company: {name}</li>
            <li>Symbol: {symbol}</li>
            <li>Market Cap: {marketCap}</li>
            <li>IPO Year: {ipoYear}</li>
            <li>Industry: {industry}</li>
            <li>Sector: {sector}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Asset;
