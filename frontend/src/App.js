import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import { Nav, NavDropdown, Navbar, Row, Container, Col } from "react-bootstrap";
import firebase from "firebase";
import { auth } from "firebaseui";
import ProfilePage from "./Pages/ProfilePage";

const firebaseConfig = {
  apiKey: "AIzaSyDsR3cCWvvEUfCtTVaGMxb-of71S30OfYw",
  authDomain: "jasmine-ecommerce.firebaseapp.com",
  projectId: "jasmine-ecommerce",
  storageBucket: "jasmine-ecommerce.appspot.com",
  messagingSenderId: "496594169433",
  appId: "1:496594169433:web:d6eef11e8d368144f8cb48",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// var ui = new auth.AuthUI(firebase.auth());

// ui.start("#firebaseui-auth-container", {
//   signInOptions: [
//     // List of OAuth providers supported.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//   ],
// });

function App() {
  return (
    <Router>
      <div className="grid-container">
        {/* <div id="firebaseui-auth-container" /> */}
        <Navbar className="bg-main" expand="lg">
          <Link to={"/"}>
            <Navbar.Brand href="#home">JASMINE</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <main className="main">
          <div className="content">
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
          </div>
        </main>
        {/* <footer className="footer">All right reserved.</footer> */}
      </div>
    </Router>
  );
}

export default App;
