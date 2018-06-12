import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AreaChart, Area, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label, CartesianAxis } from 'recharts';


class AssetChart extends React.Component {
 constructor (props) {
   super(props);
 }

 render () {
   const {data} = this.props;
   if (data.length===0) return <div>No Data</div>;
   return (
       <AreaChart className='show-chart' width={850} height={350} data={data}
         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
         <defs>
           <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
             <stop offset="5%" stopColor="#21ce99" stopOpacity={0.8}/>
             <stop offset="95%" stopColor="#21ce99" stopOpacity={0}/>
           </linearGradient>
         </defs>
         <XAxis interval={0} dataKey="key" tick={false} />
         <YAxis hide={true} domain={[dataMin => (Math.round(dataMin)*0.998), 'dataMax']}/>
         <CartesianAxis />
         <Tooltip coordinate={ {x: 0, y: 800} }/>
         <Area type="monotone" dataKey="value" stroke="#21ce99" fillOpacity={1} fill="url(#colorUv)" />
       </AreaChart>
   );
 }
}

export default withRouter(AssetChart);
