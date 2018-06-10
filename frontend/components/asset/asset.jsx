import React from 'react';
import NavBarContainer from '../dashboard/navbar_container';

class Asset extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.retrieveAsset(this.props.match.params.id);
  }


  render () {
    console.log(this.props.asset);
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
      <div className="showAsset">
        <NavBarContainer />
        <ul className="assetDetails">
          <li>{name}</li>
          <li>{symbol}</li>
          <li>{marketCap}</li>
          <li>{ipoYear}</li>
          <li>{industry}</li>
          <li>{sector}</li>
        </ul>
      </div>
    );
  }
}

export default Asset;
