import React from "react";
import { Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import "../../css/Cart.css";

export default function ShoppingCart(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-left title">shopping cart</Card.Title>

        {props.items.map((item) => (
          <Row key={item.product.id}>
            <Col md={4} lg={4} xl={4} sm={4} xs={4}>
              <img
                src={item.product.image}
                alt={item.product.name}
                className="product-image"
              ></img>
            </Col>

            <Col
              md={8}
              lg={8}
              xl={8}
              sm={8}
              xs={8}
              className="d-flex flex-row-reverse align-items-center justify-content-around"
            >
              <Button
                variant="danger"
                onClick={() => props.onRemoveItemFromCart(item.product)}
              >
                Delete{" "}
              </Button>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  {item.qty}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {[...Array(Number(item.product.countInStock)).keys()].map(
                    (x) => (
                      <Dropdown.Item
                        key={x}
                        eventKey={x + 1}
                        onSelect={(eventKey, event) =>
                          props.onUpdateCart({
                            product: item.product,
                            qty: Number(eventKey),
                          })
                        }
                      >
                        {x + 1}
                      </Dropdown.Item>
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <div></div>
              <div className="h5 text-left"> {item.product.name}</div>
            </Col>
          </Row>
        ))}
      </Card.Body>
      <Card.Footer className="text-right">
        <h2>
          Subtotal (
          {props.items.reduce((totalQty, item) => totalQty + item.qty, 0)}{" "}
          items) : €{" "}
          {props.items.reduce(
            (totalPrice, item) => totalPrice + item.product.price * item.qty,
            0
          )}
        </h2>
      </Card.Footer>
    </Card>
  );
}
