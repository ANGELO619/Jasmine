import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import { Nav, NavDropdown, Navbar, } from "react-bootstrap";
import firebase from "firebase";
import LoginDialog from './components/LoginDialog'
import { useSelector } from "react-redux";

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

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const auth = useSelector(state => state.auth)
  firebase.auth().onAuthStateChanged(user => {
    console.log({ user, auth })
  })

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsLogin(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <Router>
      <div className="grid-container">
        <Navbar className="bg-main" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => firebase.auth().signOut()}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <LoginDialog show={isLogin} onHide={() => setIsLogin(false)} setModalShow={setIsLogin}></LoginDialog>

        <main className="main">
          <div className="content">
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/" exact={true} component={HomePage} />
          </div>
        </main>
        {/* <footer className="footer">All right reserved.</footer> */}
      </div>
    </Router>
  );
}

export default App;
