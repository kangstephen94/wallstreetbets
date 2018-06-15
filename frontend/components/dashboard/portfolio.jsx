import React from 'react';
import { PieChart, Pie, AreaChart, Area, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label, CartesianAxis } from 'recharts';

class Portfolio extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    this.props.retrieveHoldings();
  }

  render () {
    const {payload} = this.props;
    let assetIds;
    let holdings;
    let assets;
    let el;
    if (payload && Object.keys(payload).length !== 0) {
      assetIds = Object.keys(payload.holdings);
      assets = payload.assets;
      holdings = payload.holdings;

      el = assetIds.map (id => (
        <li className="holdings">
          <div>{assets[id].name}</div>
          <div>{assets[id].symbol}</div>
          <div>{holdings[id]}</div>
        </li>
      ));
    }


    return (
      <ul className='portfolio'>
        {el}
      </ul>
    );
  }
}

export default Portfolio;
