import React from 'react';

class BuySell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // asset_id: this.props.asset.id,
      portfolio_id: this.props.currentUserId,
      amount: null,
      // price_purchased: this.props.asset.last_price
    };
    this.handleAmount = this.handleAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAmount (e) {
    this.setState({amount: e.target.value});
  }

  handleSubmit (e) {
    this.retrieveBuy(this.state);
  }

  render () {
    return (
      <div className="buysell">

      </div>
    );
  }

}

export default BuySell;
