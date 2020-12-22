import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../css/Cart.css"
import ShoppingCart from "../components/cart-checkout/ShoppingCart";
import AddressForm from "../components/cart-checkout/Form";
import { useFirestore } from 'react-redux-firebase'

export default function CartPage(props) {
  const firestore = useFirestore()
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const [cart, setCart] = useState({
    id: null,
    items: [],
    belongTo: null
  })

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
      return
    });
    return ref.current;
  }

  const preItemLength = usePrevious(cart?.items?.length)

  useEffect(() => {
    if (!productId) {
      return props.history.push('/')
    }
  }, []);

  useEffect(() => {
    firestore.collection('carts').doc('test_cart').get().then(doc => {
      const cartData = doc.data()

      console.log(cartData);

      if (!cartData) {
        return props.history.push('/')
      }

      if (cartData.items.length === 0 && preItemLength) {
        return props.history.push('/')
      }
      setCart(doc.data())
    })
  }, []);



  return (
    <Row className="mx-xs-0 mx-smx-0 mx-md-0 mx-lg-0 mx-xl-0 mt-3">
      <Col md={6} lg={6} xl={6} sm={6} xs={12}>
        <ShoppingCart items={cart.items}></ShoppingCart>
      </Col>
      <Col md={6} lg={6} xl={6} sm={6} xs={12}>
        <AddressForm></AddressForm>
      </Col>
    </Row>
  );
}
