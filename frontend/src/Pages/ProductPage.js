import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../actions/productActions";
import { AUTH_SHOW_LOGIN_DIALOG } from "../constants/authConstants"

import "../css/Product.css";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Dropdown } from "react-bootstrap";

function ProductPage(props) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product = {} } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    if (!auth.isLogin) {
      dispatch({
        type: AUTH_SHOW_LOGIN_DIALOG,
        payload: true
      })
      return
    }

    props.history.push(`/cart/${productId}?qty=${qty}`);

  };

  const auth = useSelector((state) => state.auth);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">${error}</MessageBox>
      ) : (
            <Container fluid>
              <Row>
                <Col md={6}>
                  <div className="details-img text-right">
                    <img src={product.image} alt="product"></img>
                  </div>
                </Col>
                <Col md={6} className="my-5">
                  <div className="details-info">
                    <ul>
                      <li>
                        <h4>{product.name}</h4>
                      </li>
                      <li>
                        <b>Brand: {product.brand}</b>
                      </li>
                      <li>
                        <b>
                          Price:{" "}
                          <span className="price-color">€ {product.price}</span>
                        </b>
                      </li>
                      <li>
                        <b>Description:</b>
                        <div>{product.description}</div>
                      </li>
                      <li>
                        <b>Status: </b>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                            <span className="danger">Unavailable</span>
                          )}
                      </li>
                      <li>
                        <b>Qty: </b>
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">{qty}</Dropdown.Toggle>

                          <Dropdown.Menu>
                            {[...Array(product.countInStock).keys()].map((x) => (
                              <Dropdown.Item eventKey={x + 1} onSelect={
                                (value, event) => setQty(value)
                              }>
                                {x + 1}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </ul>
                    <Button className="mx-3" onClick={addToCartHandler}>
                      Add to Cart
                </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
    </div>
  );
}

export default ProductPage;
