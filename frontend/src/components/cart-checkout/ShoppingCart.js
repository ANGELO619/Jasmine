import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItem } from "../../actions/cartActions";
import { Row, Col, Card, Button } from "react-bootstrap";

import "../../css/cart.css";

export default function ShoppingCart(props) {

  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-left title ">shopping cart</Card.Title>

        {props.items.map((item) => (
          <Row key={item.product.id} fluid>
            <Col>
              <img src={item.product.image} alt={item.product.name} className="small"></img>
            </Col>
            <Col className="m-5">
              <div>
                <p className="title text-left"> {item.product.name}</p>
                <p>{item.product.description}</p>
              </div>
            </Col>
            <Col auto className="my-0 ">
              <Button
                className="rounded-pill my-5"
                variant="info"
                onClick={() => removeFromCartHandler(item.product.id)}
              >
                Delete
              </Button>
              <Row>
                <Col className="mx-5 ">
                  <p>qty :</p>
                </Col>
                <Col auto className="text-left justify-content-start">
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          updateCartItem({ product: item.product, qty: Number(e.target.value) })
                        )
                      }
                    >
                      {[...Array(item.product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Card.Body>
      <Card.Footer className="text-right">
        <h2>
          Subtotal ({props.items.reduce((totalQty, item) => totalQty + item.qty, 0)} items) : €{" "}
          {props.items.reduce((totalPrice, item) => totalPrice + item.product.price * item.qty, 0)}
        </h2>
      </Card.Footer>
    </Card>
  );
}
