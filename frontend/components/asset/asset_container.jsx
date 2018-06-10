import { connect } from 'react-redux';
import {retrieveAsset} from '../../actions/asset_actions';
import Asset from './asset';

const msp = (state, ownProps) => ({
  asset: state.entities.assets[ownProps.match.params.id]
});

const mdp = dispatch => ({
  retrieveAsset: id => dispatch(retrieveAsset(id))
});

export default connect(msp, mdp)(Asset);
