import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
import "../css/Home.css";

function HomePage(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">${error}</MessageBox>
      ) : (
        <div className="home-container">
          <div className="banner">
            <div className="banner-title">
              <p> discover quick & easy</p>
              <p>resipe</p>
            </div>
          </div>
          <div className="catagory">
            <div className="catagory-items ">
              <p>image</p>
            </div>
            <div className="catagory-items ">
              <p>image</p>
            </div>
            <div className="catagory-items ">
              <p>image</p>
            </div>
          </div>

          <div className="product-wrapper">
            <div className="items">
              <p>asdasd</p>
            </div>
            <div className="items">
              <p>asdasd</p>
            </div>
            <div className="items">
              <p>asdasd</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
