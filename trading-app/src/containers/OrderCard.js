import React from 'react';


const OrderCard = ({order}) => {
  return (
    <div key={order.id} className="orderCard">
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">SIDE</th>
          <th scope="col">Symbol</th>
          <th scope="col">Quantity</th>
          <th scope="col">Committed</th>
          <th scope="col">Executed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{order.side}</td>
          <td>{order.symbol}</td>
          <td>{order.quantity}</td>
          <td>{order.committed}</td>
          <td>{order.executed}</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}
export default OrderCard;
