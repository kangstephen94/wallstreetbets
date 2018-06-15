import {getHoldings} from '../utils/portfolio_util';
export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS";

export const retrieveHoldings = () => dispatch => (
  getHoldings().then( payload => dispatch(receiveHoldings(payload)))
 );


 export const receiveHoldings = payload => ({
   type: RECEIVE_HOLDINGS,
   payload
 });
