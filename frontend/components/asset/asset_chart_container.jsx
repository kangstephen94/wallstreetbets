import { connect } from 'react-redux';
import AssetChart from './asset_chart';
import {retrieveData, clearData} from '../../actions/asset_actions';
import { Link, withRouter } from 'react-router-dom';


const msp = (state, ownProps) => ({
  data: state.entities.data,
});

const mdp = dispatch => ({
  retrieveData: (sym,func) => dispatch(retrieveData(sym, func)),
  clearData: () => dispatch(clearData())
});

export default withRouter(connect(msp, mdp)(AssetChart));
