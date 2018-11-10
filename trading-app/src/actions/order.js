import {resetOrderForm} from './orderForm';

const setOrders = orders => {
  return {
    type: 'GET_ORDERS_SUCCESS',
    orders
  }
}

const addOrder = order => {
  return {
    type:'CREATE_ORDER_SUCCESS',
    order
  }
}




export const getOrders = () => {
  return dispatch => {
    return fetch('http://localhost:8080/orders')
    .then(response => response.json())
    .then(orders => dispatch(setOrders(orders)))
    .catch(err => console.log(err));
  }
}

export const createOrder = order => {
  console.log("order", order);
  return dispatch => {
    let test = fetch('http://localhost:8080/orders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( order )
    })
    .then(response => console.log(response))
    .then(order => {
      dispatch(addOrder(order))
      dispatch(resetOrderForm())
    })
    .catch(err => console.log(err))
  }
}
