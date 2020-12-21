import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../actions/productActions";

import "../css/Product.css";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
    console.log(auth);
    if (auth.isLogin) {
      props.history.push(`/cart/${productId}?qty=${qty}`);
    } else {
      alert("please login");
    }
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
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
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
