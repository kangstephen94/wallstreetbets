import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'recharts';


class CustomTooltip2 extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidUpdate () {
    const { active } = this.props;
    if (active) {
      const {payload, label} = this.props;
      const pointedprice = payload[0].value;
      this.props.updatePointedPrice(pointedprice);
    }
  }

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div>
          <p id='date'>{label}</p>
        </div>
      );
    }

    return null;
  }
}

CustomTooltip2.propTypes = {
  type: PropTypes.string,
  payload: PropTypes.array,
  label: PropTypes.string,
};


export default CustomTooltip2;
