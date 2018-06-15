import PriceDate from './price_data';
import {connect} from 'react-redux';

const mapStateToProps = state => {
 const prices = state.entities.data.data;
 const endPrice = prices[Object.keys(prices).length-1].value;
 const startPrice = prices[0].value;
 return {
   pointedPrice: state.entities.tooltip.pointedPrice,
   endPrice: endPrice,
   startPrice: startPrice
};
};



export default connect(mapStateToProps)(PriceDate);
