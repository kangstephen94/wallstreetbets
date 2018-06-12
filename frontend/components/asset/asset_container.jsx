import { connect } from 'react-redux';
import {retrieveAsset, retrieveData} from '../../actions/asset_actions';
import Asset from './asset';

const msp = (state, ownProps) => ({
  asset: state.entities.assets[ownProps.match.params.sym],
  data: Object.values(state.entities.data)
});

const mdp = dispatch => ({
  retrieveAsset: sym => dispatch(retrieveAsset(sym)),
  retrieveData: (sym,func) => dispatch(retrieveData(sym, func))
});

export default connect(msp, mdp)(Asset);
