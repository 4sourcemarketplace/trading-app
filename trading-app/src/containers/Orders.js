import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Orders.css';
import OrderCard from './OrderCard';
import {getOrders} from '../actions/order';



class Orders extends Component {


constructor(props) {
  super(props);
  this.state = {
    id: this.props.id,
    side:this.props.side,
    symbol:this.props.symbol,
    quantity:this.props.quantity,
    committed:this.props.committed,
    executed:this.props.executed,
    open: true,
    complete: false
  };
  this.handleClick = this.handleClick.bind(this)
}

clearOrders(){
  var command = {"type": "allOrdersDeleted"}
  return fetch('http://localhost:8080/reset', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify(command)
    })
    .then(response => console.log(response))
    .then(this.setState([]))
    .catch(err => console.log(err))
}


componentDidMount() {
  this.props.getOrders()
}

handleClick(e) {
  e.preventDefault();
  this.clearOrders();
}

  render () {
    return (
<div className="OrdersContainer">
<h1>Orders</h1>
{this.props.orders.map(order =>
  <OrderCard key={this.state.id} order={order} />)}
    <button onClick={this.handleClick}>Clear Trades</button>
</div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    orders: state.orders
  })
}
export default connect(mapStateToProps, {getOrders})(Orders);
