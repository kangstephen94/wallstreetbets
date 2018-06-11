import React from 'react';
import NavBarContainer from '../dashboard/navbar_container';

class Asset extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.sym !== nextProps.match.params.sym) {
      this.props.retrieveAsset(nextProps.match.params.sym);
      this.props.retrieveData(nextProps.match.params.sym);
    }
  }

  componentDidMount () {
    this.props.retrieveAsset(this.props.match.params.sym);
    this.props.retrieveData(this.props.match.params.sym);
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
        <ul className="asset-details">
          <li>{name}</li>
          <li>{symbol}</li>
          <li>{marketCap}</li>
          <li>{ipoYear}</li>
          <li>{industry}</li>
          <li>{sector}</li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Asset;
