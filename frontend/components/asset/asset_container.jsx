import { connect } from 'react-redux';
import {retrieveAsset, retrieveData} from '../../actions/asset_actions';
import Asset from './asset';

const msp = (state, ownProps) => ({
  asset: state.entities.assets[ownProps.match.params.sym]
});

const mdp = dispatch => ({
  retrieveAsset: sym => dispatch(retrieveAsset(sym)),
  retrieveData: sym => dispatch(retrieveData(sym))
});

export default connect(msp, mdp)(Asset);
