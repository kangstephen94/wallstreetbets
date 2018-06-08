import { connect } from 'react-redux';
import { searchAssets, clearAsset} from '../../actions/asset_actions';
import SearchBar from './searchbar';

const msp = state => ({
  assets: state.entities.searchedAssets
});

const mdp = dispatch => ({
  searchAssets: query => dispatch(searchAssets(query)),
  clearAssets: () => dispatch(clearAsset())
});


export default connect(msp, mdp)(SearchBar);
