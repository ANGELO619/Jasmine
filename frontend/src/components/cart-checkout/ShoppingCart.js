import React from "react";
import { Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import "../../css/Cart.css";
import NumberInput from "../NumberInput";

export default function ShoppingCart(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-left title">shopping cart</Card.Title>

        {props.items.map((item) => (
          <Row
            key={item.product.id}
            className="justify-content-center text-center"
          >
            <Col md={12} lg={4} xl={4} sm={12} xs={12}>
              <img
                src={item.product.image}
                alt={item.product.name}
                className="product-image"
              ></img>
            </Col>

            <Col
              md={12}
              lg={8}
              xl={8}
              sm={12}
              xs={12}
              className="d-flex flex-row-reverse align-items-center justify-content-evenly"
            >
              <Button
                variant="danger"
                onClick={() => props.onRemoveItemFromCart(item.product)}
              >
                Delete{" "}
              </Button>
              <NumberInput
                value={item.qty}
                onChange={(qty) =>
                  props.onUpdateCart({
                    product: item.product,
                    qty: Number(qty),
                  })
                }
              ></NumberInput>

              <div></div>
              <div className="h5 text-left"> {item.product.name}</div>
            </Col>
          </Row>
        ))}
      </Card.Body>
      <Card.Footer className="text-right">
        <h4>
          Subtotal (
          {props.items.reduce((totalQty, item) => totalQty + item.qty, 0)}{" "}
          items) : €{" "}
          {props.items.reduce(
            (totalPrice, item) => totalPrice + item.product.price * item.qty,
            0
          )}
        </h4>
      </Card.Footer>
    </Card>
  );
}
