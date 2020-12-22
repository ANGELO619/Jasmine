import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_SHOW_LOGIN_DIALOG } from "../constants/authConstants"
import { useFirestore } from 'react-redux-firebase'
import "../css/Product.css";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Dropdown } from "react-bootstrap";
import firebase from 'firebase'

function ProductPage(props) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [product, setProduct] = useState({})

  const firestore = useFirestore()

  useEffect(() => {
    firestore.collection('products').doc(productId).get().then(doc => {
      setProduct(doc.data())
    })
  }, [])


  const addToCartHandler = async () => {
    if (!auth.isLogin) {
      dispatch({
        type: AUTH_SHOW_LOGIN_DIALOG,
        payload: true
      })
      return
    }

    await firestore.collection('carts').doc('test_cart').set({
      items: firebase.firestore.FieldValue.arrayUnion({
        product,
        qty
      })
    }, { merge: true })

    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  const auth = useSelector((state) => state.auth);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="d-flex flex-row align-items-center justify-content-center product-image-container">
            <img className="product-image" src={product.image} alt="product"></img>
          </div>
        </Col>
        <Col md={6} className="d-flex flex-row align-items-center justify-content-center">
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
                <b>
                  Price:{" "}
                  <span >€ {product.description}</span>
                </b>
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
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">{qty}</Dropdown.Toggle>

                  <Dropdown.Menu>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <Dropdown.Item key={x} eventKey={x + 1} onSelect={
                        (value) => setQty(value)
                      }>
                        {x + 1}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Button onClick={addToCartHandler}>Add to Cart</Button>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductPage;
