import React, {Component} from 'react';
import OrderCard from './OrderCard';
import {getOrders} from '../actions/order';
import Websocket from 'react-websocket';
import { connect } from 'react-redux';
class OrderTesting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:this.props.id,
      side:this.props.side,
      symbol:this.props.symbol,
      quantity:this.props.quantity,
      committed:this.props.committed,
      executed:this.props.executed
    };
  }

  componentDidMount() {
    this.props.getOrders()
  }

  handleData(data) {
    let result = JSON.parse(data);
    this.setState({
    committed: data.committed - result.movement,
    executed: data.executed + result.movement
    });
  }

  render() {
    return (
      <div>
      {this.props.orders.map(order =>
        <OrderCard key={this.state.id} order={order} />)}
        <Websocket url='ws://localhost:8080/orders'
            onMessage={this.handleData.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    orders: state.orders
  })
}
export default connect(mapStateToProps, {getOrders})(OrderTesting);
