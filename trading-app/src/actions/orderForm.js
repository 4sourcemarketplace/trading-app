export const updateOrderFormData = orderFormData => {
  return {
    type: 'UPDATED_DATA',
    orderFormData
  }
}

export const resetOrderForm = () => {
  return {
    type: 'RESET_ORDER_FORM'
  }
}
