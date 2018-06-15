import { connect } from 'react-redux';
import Portfolio from './portfolio';
import {retrieveHoldings} from '../../actions/portfolio_actions';

const msp = state => ({
  payload: state.entities.assetOwnership
});

const mdp = dispatch => ({
  retrieveHoldings: () => dispatch(retrieveHoldings())
});


export default connect(msp, mdp)(Portfolio);
