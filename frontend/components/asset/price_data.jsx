import React from 'react';


class PriceData extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     pointedPrice: null,
   };
 }

 componentWillReceiveProps(nextProps, nextState){
   if (this.state.pointedprice !== nextProps.pointedPrice ) {
     this.setState(
       {pointedprice: this.props.pointedPrice}
     );
   }
 }

 componentWillUnmount () {
   this.setState({pointedPrice: null});
 }


 changeFormatter(startPrice){
   let change;
   let percentchange;
  if (this.props.pointedPrice === null) {
    change = (this.props.endPrice - startPrice).toPrecision(3);
    percentchange = (((this.props.endPrice - startPrice)/startPrice)*100).toPrecision(3);
  }
  else {
    change = (this.props.pointedPrice - startPrice).toPrecision(3);
    percentchange = (((this.props.pointedPrice - startPrice)/startPrice)*100).toPrecision(3);
  }
   if (change < 0) {
     change = '-$' + change.toString().slice(1);
   }else {change = '+$' + change;}
   return   `${change} (${percentchange}%)`;
 }



 render(){
   const endPrice = this.props.endPrice;
   const startPrice = this.props.startPrice;
   return (
     <div>
       <p className="pointed_price"  >{ '$' + (this.props.pointedPrice  || endPrice ) }</p>
       <p className="price_change">{ this.changeFormatter(this.props.startPrice)}</p>
     </div>
   );
 }
}

export default PriceData;
