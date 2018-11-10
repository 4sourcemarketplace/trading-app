const initialState = {
  id: '',
  side: '',
  symbol: '',
  quantity: 0,
  committed: 0,
  executed: 0
  }

export default(state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
    return action.orderFormData;



    case 'RESET_ORDER_FORM':
      return initialState;

    default:
    return state;
  }
}
