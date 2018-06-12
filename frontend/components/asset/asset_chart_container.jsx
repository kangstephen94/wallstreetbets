import { connect } from 'react-redux';
import AssetChart from './asset_chart';
import {retrieveData} from '../../actions/asset_actions';

const msp = (state, ownProps) => ({
  data: Object.values(state.entities.data),
});

const mdp = dispatch => ({
  retrieveData: (sym,func) => dispatch(retrieveData(sym, func))
});

export default connect(msp, mdp)(AssetChart);
