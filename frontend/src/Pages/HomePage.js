import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap";
import "../css/Home.css";
import { useFirestore } from "react-redux-firebase";
import Loading from "../components/Loading";

function HomePage() {
  const firestore = useFirestore();
  const [products, setProducts] = useState([]);

  const listenerSettings = {
    collection: "products",
    orderBy: ["createdAt", "asc"],
    limit: 10,
  };

  useEffect(() => {
    firestore
      .collection("products")
      .get()
      .then((doc) => {
        setProducts(doc.docs.map((doc) => doc.data()));
      });

    firestore.setListener(listenerSettings);

    return function cleanup() {
      firestore.unsetListener(listenerSettings);
    };
  }, []);

  return (
    <div>
      <div className="banner">
        <div className="banner-title">
          <p> discover quick & easy</p>
          <p>resipe</p>
        </div>
      </div>
      <Container className="mt-3 ">
        <Row className="justify-content-md-center  my-5">
          {/* <Loading
            type="balls"
            color="#ffffff"
            height={"20%"}
            width={"20%"}
          ></Loading> */}
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
  );
}

export default HomePage;
