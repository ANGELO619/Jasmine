import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../css/cart.css";

export default function CartPage(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  console.log(cart);

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <Container fluid className="text-center">
      <Row fluid className="my-3">
        <Col md={8} lg={8} xl={8} sm={8} xs={12}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <Row fluid className="ml-0">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title className="text-left title ">
                      shopping cart
                    </Card.Title>

                    {cartItems.map((item) => (
                      <Row key={item.product} fluid>
                        <Col>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </Col>
                        <Col className="m-5">
                          <div>
                            <p>product name: {item.name}</p>
                            <p>product details:</p>
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
                            <Col
                              auto
                              className="text-left justify-content-start"
                            >
                              <div>
                                <select
                                  value={item.qty}
                                  onChange={(e) =>
                                    dispatch(
                                      addToCart(
                                        item.product,
                                        Number(e.target.value)
                                      )
                                    )
                                  }
                                >
                                  {[...Array(item.countInStock).keys()].map(
                                    (x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    )
                                  )}
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
                      Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}{" "}
                      items) : €{" "}
                      {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </h2>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          )}
        </Col>
        <Col md={4} lg={4} xl={4} sm={4} xs={12}>
          <Card>
            <Card.Body>
              <Card.Title className="text-left title">address</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Row className="mb-5">
                  <Col md={12}>
                    <div className="text-left mt-4">
                      <div className="title">
                        <p>name</p>
                      </div>
                      <div className="text-center">
                        <input className="full-length-input"></input>
                      </div>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="text-left mt-4">
                      <div className="title">
                        <p>email</p>
                      </div>
                      <div className="text-center">
                        <input className="full-length-input"></input>
                      </div>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="text-left mt-4">
                      <div className="title">
                        <p>address</p>
                      </div>
                      <div className="text-center">
                        <input className="full-length-input"></input>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <div className="text-left mt-4">
                      <div className="title">
                        <p>sub-district</p>
                      </div>
                      <div>
                        <input className="full-length-input"></input>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <div className="text-left mt-4">
                      <div className="title">
                        <p>distric</p>
                      </div>
                      <div>
                        <input className="full-length-input"></input>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <div className="text-left mt-4">
                      <div className="title">
                        <p>province</p>
                      </div>
                      <div>
                        <input className="full-length-input"></input>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <div className="text-left mt-4">
                      <div className="title">
                        <p>post code</p>
                      </div>
                      <div>
                        <input className="full-length-input"></input>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Subtitle>

              <Row fluid>
                <Col md={12} className="text-left">
                  <h3 className="title">payment method</h3>
                </Col>

                <Col
                  md={12}
                  fluid
                  className="justify-content-center my-5 title"
                >
                  <Button className="button-text qr-button">qr code</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
