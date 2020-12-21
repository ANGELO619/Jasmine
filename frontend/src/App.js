import React, { useCallback, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SHOW_LOGIN_DIALOG } from './constants/authConstants'

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
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const setShowLogin = useCallback((show) => {
    dispatch({
      type: AUTH_SHOW_LOGIN_DIALOG,
      payload: show
    })
  }, [dispatch])

  const setIsLogin = useCallback((isLogin, uid = null) => {
    if (!isLogin) {
      dispatch({
        type: AUTH_LOGOUT
      })
      return
    }
    dispatch({
      type: AUTH_LOGIN,
      payload: uid
    })
  }, [dispatch])

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        setIsLogin(false)
        return
      }
      setShowLogin(false)
      setIsLogin(true, user.uid)
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [setIsLogin, setShowLogin]);

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
                {auth.isLogin ?
                  <NavDropdown.Item onClick={() => firebase.auth().signOut()}>Logout</NavDropdown.Item> :

                  <NavDropdown.Item onClick={() => setShowLogin(true)}>Login</NavDropdown.Item>
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <LoginDialog show={auth.showLoginDialog} onHide={() => setShowLogin(false)} callback={setIsLogin}></LoginDialog>

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
