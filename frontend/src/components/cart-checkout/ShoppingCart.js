import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItem } from "../../actions/cartActions";
import { Row, Col, Card, Button, Dropdown } from "react-bootstrap";

import "../../css/Cart.css";

export default function ShoppingCart(props) {

  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-left title">shopping cart</Card.Title>

        {props.items.map((item) => (
          <Row key={item.product.id} fluid>
            <Col xs={4}>
              <img src={item.product.image} alt={item.product.name} className="product-image"></img>
            </Col>
            <Col xs={4} className="">
              <div>
                <div className="h1 text-left"> {item.product.name}</div>
                <div className="title text-left">{item.product.description}</div>
              </div>
            </Col>
            <Col xs={4} auto className="d-flex flex-row-reverse align-items-center justify-content-around">
              <Button
                variant="danger"
                onClick={() => removeFromCartHandler(item.product.id)}
              >
                Delete              </Button>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">{item.qty}</Dropdown.Toggle>

                <Dropdown.Menu>
                  {[...Array(item.product.countInStock).keys()].map((x) => (
                    <Dropdown.Item eventKey={x + 1} onSelect={
                      (eventKey, event) => dispatch(
                        updateCartItem({ product: item.product, qty: Number(eventKey) })
                      )
                    }>
                      {x + 1}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <div>
              </div>
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
