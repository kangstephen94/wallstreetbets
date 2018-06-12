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

 getValue (payload, label) {
   this.setState({payload: payload, label: label});
 }

 render () {
   const {data} = this.props;
   if (data.length===0) return <div>No Data</div>;
     if (this.state.payload) {
       var number = this.state.payload[0].value;
       var date = this.state.label;
       var percent = ((number/data[0].value - 1) * 100).toPrecision(3);
       var difference = (number - data[0].value).toPrecision(3);
     } else {
       var number = '';
       var date = '';
       var percent = '';
       var difference = '';
     }

     if (percent >= 0) {
       var color = "#21ce99";
     } else {
       var color = "red";
     }

   return (
     <div>
       <div className="custom-tooltip">
         <p className="label">{`$${number}`}</p>
         <p className="percentage">{`$${difference} (${percent}%)`}</p>
       </div>
       <AreaChart className='show-chart' width={700} height={350} data={data}
         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
         <defs>
           <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
             <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
             <stop offset="95%" stopColor={color} stopOpacity={0}/>
           </linearGradient>
         </defs>
         <XAxis interval={0} dataKey="key" tick={false} />
         <YAxis hide={true} domain={[dataMin => (Math.round(dataMin)*0.995), 'dataMax']}/>
         <CartesianAxis />
         <Tooltip content={<CustomTooltip getValue={this.getValue}/>} />
         <Tooltip cursor={{ stroke: 'white', strokeWidth: 2 }} />
         <Area type="monotone" dataKey="value" stroke={color} fillOpacity={1} fill="url(#colorUv)" />
       </AreaChart>

     </div>
   );
 }
}

export default withRouter(AssetChart);
