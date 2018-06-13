import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AreaChart, Area, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label, CartesianAxis } from 'recharts';
import PropTypes from 'prop-types';


class CustomTooltip extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      this.props.getValue(payload, label);
      return (
        <div></div>
      );
    }

    return null;
  }
}

CustomTooltip.propTypes = {
  type: PropTypes.string,
  payload: PropTypes.array,
  label: PropTypes.string,
};

class AssetChart extends React.Component {
 constructor (props) {
   super(props);
   this.state = {
     payload: null,
     label: null
   };
   this.getValue = this.getValue.bind(this);
 }

 componentWillReceiveProps (nextProps) {
   if (this.props.match.params.sym !== nextProps.match.params.sym) {
   this.props.retrieveData(nextProps.match.params.sym, 'TIME_SERIES_1D');
 }
 }

 componentWillUnmount () {
   this.props.clearData();
 }

 componentDidMount () {
   this.props.retrieveData(this.props.match.params.sym, 'TIME_SERIES_1D');
 }

 getValue (payload, label) {
   this.setState({payload: payload, label: label});
 }

 render () {
   let data;
   if (this.props.data.data === undefined) {
     return <div className='loader'>No Data</div>;
   }
  else {
    data = Object.values(this.props.data.data);

    if (this.state.payload) {
      var number = this.state.payload[0].value;
      var date = this.state.label;
      var percent = ((number/data[0].value - 1) * 100).toPrecision(3);
      var difference = (number - data[0].value).toPrecision(3);
    } else {
      var number = data.slice(-1)[0].value;
      var percent = ((data[data.length-1].value/data[0].value - 1)*100).toPrecision(3);
      var difference = (data[data.length-1].value - data[0].value).toPrecision(3);
      var date = 'time:';
    }
  }
  let change = ((data[data.length-1].value/data[0].value - 1)*100).toPrecision(3);

  if (change >= 0) {
    var color = "#21ce99";
  } else {
    var color = "#f45531";
  }


   return (
     <div className='asset-chart'>
       <ul className="custom-tooltip">
         <li id="price">{`$${number}`}</li>
         <li id="percentage">{`$${difference} (${percent}%)`}</li>
         <li id="date">{`${date}`}</li>
       </ul>
       <AreaChart className='show-chart' width={650} height={350} data={data}
         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
         <defs>
           <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
             <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
             <stop offset="95%" stopColor={color} stopOpacity={0}/>
           </linearGradient>
         </defs>
         <XAxis hide={true} interval={0} dataKey="key" tick={false} />
         <YAxis hide={true} domain={[dataMin => (Math.round(dataMin)*0.995), 'dataMax']}/>
         <Tooltip content={<CustomTooltip getValue={this.getValue}/>} />
         <Tooltip cursor={{ stroke: 'white', strokeWidth: 2 }} />
         <Area type="monotone" dataKey="value" stroke={color} fillOpacity={1} fill="url(#colorUv)" />
       </AreaChart>

     </div>
   );
 }
}

export default withRouter(AssetChart);
