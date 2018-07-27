import PriceDate from './price_data';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  let endPrice;
  let startPrice;
  const prices = state.entities.data.data;
  if (prices) {
    endPrice = prices[Object.keys(prices).length - 1].value;
    startPrice = prices[0].value;
  }
  return {
    pointedPrice: state.entities.tooltip,
    endPrice: endPrice,
    startPrice: startPrice
  };
};


export default connect(mapStateToProps)(PriceDate);
