export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ORDERS_SUCCESS':
    return action.orders;

    case 'CREATE_ORDER_SUCCESS':
    return state.concat(action.order)


    default:
    return state;
  }
}
