import CustomTooltip2 from './custom_tool_tip';
import {connect} from 'react-redux';
import {updatePointedPrice} from '../../actions/custom_tool_tip_actions';

const msp = dispatch => ({
});
const mdp = dispatch => ({
  updatePointedPrice: pointedPrice => dispatch(updatePointedPrice(pointedPrice))
});

export default connect(msp, mdp)(CustomTooltip2);
