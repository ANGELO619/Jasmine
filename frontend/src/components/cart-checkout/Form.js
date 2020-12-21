import React, { useState } from "react";
import {
  Col,
  Card,
  Row,
  Button,
  Container,
  Modal,
  Form,
} from "react-bootstrap";
import QRCode from "qrcode.react";

export default function AddressForm(props) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  let test = [];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
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
                    <input
                      name="name"
                      className="full-length-input"
                      required
                    ></input>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="text-left mt-4">
                  <div className="title">
                    <p>email</p>
                  </div>
                  <div className="text-center">
                    <input
                      name="email"
                      className="full-length-input"
                      required
                    ></input>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="text-left mt-4">
                  <div className="title">
                    <p>address</p>
                  </div>
                  <div className="text-center">
                    <input
                      name="address"
                      className="full-length-input"
                      required
                    ></input>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <div className="text-left mt-4">
                  <div className="title">
                    <p>sub-district</p>
                  </div>
                  <div>
                    <input
                      name="subdistrict"
                      className="full-length-input"
                      required
                    ></input>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <div className="text-left mt-4">
                  <div className="title">
                    <p>distric</p>
                  </div>
                  <div>
                    <input
                      name="district"
                      className="full-length-input"
                      required
                    ></input>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <div className="text-left mt-4">
                  <div className="title">
                    <p>province</p>
                  </div>
                  <div>
                    <input
                      name="province"
                      className="full-length-input"
                      required
                    ></input>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <div className="text-left mt-4">
                  <div className="title">
                    <p>post code</p>
                  </div>
                  <div>
                    <input
                      name="postcode"
                      className="full-length-input"
                      required
                    ></input>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Subtitle>

          <Row fluid>
            <Col md={12} className="text-left">
              <h3 className="title">payment method</h3>
            </Col>

            <Col md={12} fluid className="justify-content-center my-5 title">
              <Button
                className="button-text qr-button"
                onClick={(e) => {
                  for (
                    let i = 0;
                    i < document.getElementsByTagName("input").length;
                    i++
                  ) {
                    if (document.getElementsByTagName("input")[i].value) {
                      if (i === 6) {
                        handleShow();
                      }
                    } else {
                      alert("Please complete form");
                      break;
                    }
                  }
                }}
              >
                qr code
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Woohoo, you're reading this text in a modal!</p>
          <QRCode value="http://facebook.github.io/react/" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
