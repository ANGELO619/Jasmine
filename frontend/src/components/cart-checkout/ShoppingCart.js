import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { Row, Col, Card, Button } from "react-bootstrap";

import "../../css/cart.css";

export default function ShoppingCart(props) {
  console.log(props);

  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-left title ">shopping cart</Card.Title>

        {props.cartItems.map((item) => (
          <Row key={item.product} fluid>
            <Col>
              <img src={item.image} alt={item.name} className="small"></img>
            </Col>
            <Col className="m-5">
              <div>
                <p className="title text-left"> {item.name}</p>
                <p>{item.productDetail}</p>
              </div>
            </Col>
            <Col auto className="my-0 ">
              <Button
                className="rounded-pill my-5"
                variant="info"
                onClick={() => removeFromCartHandler(item.product)}
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
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
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
          Subtotal ({props.cartItems.reduce((a, c) => a + c.qty, 0)} items) : €{" "}
          {props.cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h2>
      </Card.Footer>
    </Card>
  );
}
