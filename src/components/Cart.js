import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { removeFromCart, updateCartItems } from "../store/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    return state.cart;
  });

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleInc = (product) => {
    dispatch(
      updateCartItems({
        id: product.id,
        quantity: product.quantity + 1,
      })
    );
  };

  const handleDesc = (product) => {
    if (product.quantity > 1) {
      dispatch(
        updateCartItems({
          id: product.id,
          quantity: product.quantity - 1,
        })
      );
    }
  };


  const renderedCartItems = cartItems.map((product) => {
    return (
      <>
        <div className="col-md-12" style={{ marginBottom: "10px" }}>
          <Card key={product.id} className="h-100">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100px", height: "130px" }}
              />
            </div>
            <Card.Body className="text-center">
            <Link to={`/products/${product.id}`}><Card.Title>{product.title}</Card.Title></Link>
              <Card.Text>${product.price}</Card.Text>
              <Button
                variant="outline-success"
                onClick={() => handleInc(product)}
              >
                +
              </Button>
              {product.quantity}
              <Button
                variant="outline-danger"
                onClick={() => handleDesc(product)}
              >
                -
              </Button>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button
                onClick={() => handleRemoveFromCart(product.id)}
                variant="danger"
              >
                Remove from Cart
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </>
    );
  });
  return <div className="row">{renderedCartItems}</div>;
}

export default Cart;
