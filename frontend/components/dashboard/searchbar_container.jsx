import { connect } from 'react-redux';
import { searchAssets } from '../../actions/asset_actions';
import SearchBar from './searchbar';

const msp = state => ({
  assets: state.entities.searchedAssets
});

const mdp = dispatch => ({
  searchAssets: query => dispatch((searchAssets(query)))
});


export default connect(msp, mdp)(SearchBar);
