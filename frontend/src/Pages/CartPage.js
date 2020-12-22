import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { addToCart } from "../actions/cartActions";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Cart.css";
import ShoppingCart from "../components/cart-checkout/ShoppingCart";
import AddressForm from "../components/cart-checkout/Form";

export default function CartPage(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const { items } = cart;

  const preItemLength = usePrevious(items.length)

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }

  }, [dispatch, productId, qty]);

  useEffect(() => {
    if (items.length === 0 && preItemLength) {
      props.history.push('/')
    }

  }, [dispatch, items, preItemLength, props]);



  return (
    <Row className="mx-xs-0 mx-smx-0 mx-md-0 mx-lg-0 mx-xl-0 mt-3">
      <Col md={6} lg={6} xl={6} sm={6} xs={12}>
        {items.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
            <Row >
              <Col>
                <ShoppingCart items={items}></ShoppingCart>
              </Col>
            </Row>
          )}
      </Col>
      <Col md={6} lg={6} xl={6} sm={6} xs={12}>
        <AddressForm></AddressForm>
      </Col>
    </Row>
  );
}
