import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateOrderFormData } from '../actions/orderForm';
import {createOrder} from '../actions/order';


class OrderForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentOrderFormData = Object.assign({}, this.props.orderFormData, {
      [name]: value
    })
    this.props.updateOrderFormData(currentOrderFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log(this.props.orderFormData)
    this.props.createOrder(this.props.orderFormData)
  }

  render() {
    const {id,side,symbol,quantity} = this.props.orderFormData
    return (
      <div>
      Add an Order
      <form onSubmit={this.handleOnSubmit}>
      <div className="inputs">

      <label htmlFor="id">ID:</label>
      <input
        type="text"
        onChange = {this.handleOnChange}
        name="id"
        value={id}
        />
        <br />

      <label htmlFor="side">Side:</label>
      <input
        type="text"
        onChange = {this.handleOnChange}
        name="side"
        value={side}
        />
        <br />

    <label htmlFor="symbol">Symbol:</label>
    <input
      type="text"
      onChange = {this.handleOnChange}
      name="symbol"
      value={symbol}
      />
      <br />


      <label htmlFor="quantity">Quantity</label>

      <input
        type="integer"
        onChange = {this.handleOnChange}
        name="quantity"
        value={quantity}
        />
        <br />
        </div>
        <button type="submit">Add Order</button>
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orderFormData: state.orderFormData
  }
}

export default connect(mapStateToProps,{
   updateOrderFormData,
   createOrder
 })(OrderForm);
