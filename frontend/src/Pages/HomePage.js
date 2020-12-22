import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { listProducts } from "../actions/productActions";
import { Row, Col, Container, Card } from "react-bootstrap";
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
            <div>
              <div className="banner">
                <div className="banner-title">
                  <p> discover quick & easy</p>
                  <p>resipe</p>
                </div>
              </div>
              <Container className="mt-3 ">
                <Row className="justify-content-md-center  my-5">
                  <Col xs lg="4" className="catagory-items">
                    1 of 3
              </Col>
                  <Col auto="true" className="catagory-items">
                    Variable width content
              </Col>
                  <Col xs lg="4" className="catagory-items">
                    3 of 3
              </Col>
                </Row>

                <Row className="justify-content-center my-5">
                  {products.map((product) => (
                    <Col
                      md={4}
                      lg={4}
                      xl={3}
                      sm={6}
                      xs={12}
                      className="mx-3"
                      key={product.id}
                    >
                      <Card style={{ width: "18rem" }} className="hover-zoom">
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            <Link to={`/product/${product.id}`}>
                              <Card.Img variant="top" src={product.image} />
                            </Link>
                            {product.brand} € {product.price}
                          </Card.Subtitle>
                          <Card.Text>{product.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          )}
    </div>
  );
}

export default HomePage;
