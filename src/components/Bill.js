import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Bill() {
  const cartItems = useSelector((state) => {
    return state.cart;
  });

  let totalAmount=0;
  console.log("Bill====>",cartItems.length);
  const renderedRows = cartItems.map((item) => {
    return (
        totalAmount+=(item.price * item.quantity),
      <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <td>{item.price * item.quantity}</td>
      </tr>
    //   totalAmount+=`${item.price * item.quantity}`;
    );
    
  });

  return(
    <>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>id</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
        {renderedRows}
        <tr>
            <td >Total</td>
            <td>${totalAmount}</td>
        </tr>
    </tbody>
  </Table>
  <Link to='/payment'><Button>Proceed to Pay</Button></Link>
    </>
  )
}

export default Bill;
