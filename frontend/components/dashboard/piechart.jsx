import { PieChart, Pie, Sector } from 'recharts';
import React from 'react';
import { connect } from 'react-redux';


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="white">{`${payload.name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`Shares: ${value}`}
      </text>
    </g>
  );
};

class TwoLevelPieChart extends React.Component{
	constructor (props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.onPieEnter = this.onPieEnter.bind(this);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

	render () {
    const {payload} = this.props;
    let data;
    if (payload && Object.keys(payload).length !== 0) {
      data = Object.values(payload.holdings);
    }
    const width = 525;
    const height = 300;
  	return (
      <div className='piechart-container'>
        <p>Holdings Diversity</p>
    	<PieChart className="Piechart1" width={width} height={height}>
        <Pie
          dataKey="value"
        	activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={width/2}
          cy={height/2}
          innerRadius={60}
          outerRadius={80}
          fill="#f45531"
          onMouseEnter={this.onPieEnter}
        />
       </PieChart>
     </div>
    );
  }
}

const msp = state => ({
  payload: state.entities.assetOwnership
});

const mdp = dispatch => ({
});

export default connect(msp, mdp)(TwoLevelPieChart);
