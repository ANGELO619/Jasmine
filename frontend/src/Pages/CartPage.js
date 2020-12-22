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
    <Container fluid className="text-center">
      <Row fluid className="my-3">
        <Col md={8} lg={8} xl={8} sm={8} xs={12}>
          {items.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
              <Row fluid className="ml-0">
                <Col>
                  <ShoppingCart items={items}></ShoppingCart>
                </Col>
              </Row>
            )}
        </Col>
        <Col md={4} lg={4} xl={4} sm={4} xs={12}>
          <AddressForm></AddressForm>
        </Col>
      </Row>
    </Container>
  );
}
