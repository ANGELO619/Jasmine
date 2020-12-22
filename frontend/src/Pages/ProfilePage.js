import { useState } from "react";
import "../css/Profile.css";
import { Form, Button, Col, Container, Row } from "react-bootstrap";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <div>
      <div className="profile-title">
        <label>Profile</label>
      </div>
      <div className="wrapper">
        <Form>
          <div>
            <Container className="img-container">
              <Row>
                <Col className="text-center" xs={12} md={12}>
                  <img alt='' src="/images/Avatar.jpg" className="Avatar-img" />
                </Col>
              </Row>
            </Container>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicSub-district">
                <Form.Label>Sub-district</Form.Label>
                <Form.Control
                  type="sub-district"
                  placeholder="Enter sub-district"
                  value={subDistrict}
                  onChange={(e) => setSubDistrict(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="district"
                  placeholder="Enter district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicProvince">
                <Form.Label>Province</Form.Label>
                <Form.Control
                  type="province"
                  placeholder="Enter province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicZipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="zipcode"
                  placeholder="Enter zipcode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Button className="btn" variant="primary" type="submit">
              Edit Profile
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
