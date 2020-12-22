import React, { useCallback, useEffect } from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ProfilePage from "./Pages/ProfilePage";
import CartPage from "./Pages/CartPage";
import { Nav, Navbar } from "react-bootstrap";
import firebase from "firebase";
import LoginDialog from "./components/LoginDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SHOW_LOGIN_DIALOG,
} from "./constants/authConstants";

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
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const setShowLogin = useCallback(
    (show) => {
      dispatch({
        type: AUTH_SHOW_LOGIN_DIALOG,
        payload: show,
      });
    },
    [dispatch]
  );

  const setIsLogin = useCallback(
    (isLogin, uid = null) => {
      if (!isLogin) {
        dispatch({
          type: AUTH_LOGOUT,
        });
        return;
      }
      dispatch({
        type: AUTH_LOGIN,
        payload: uid,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) {
          setIsLogin(false);
          return;
        }
        setShowLogin(false);
        setIsLogin(true, user.uid);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [setIsLogin, setShowLogin]);

  return (
    <Router>
      <div className="grid-container">
        <Navbar className="bg-main" expand="lg">
          <Link to="/">
            <Navbar.Brand href="#home">JASMINE</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {auth.isLogin ? (
                <Nav.Link
                  title="Logout"
                  onClick={() => firebase.auth().signOut()}
                >
                  Logout
                </Nav.Link>
              ) : (
                  <Nav.Link title="Login" onClick={() => setShowLogin(true)}>
                    Login
                  </Nav.Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <LoginDialog
          show={auth.showLoginDialog}
          onHide={() => setShowLogin(false)}
          callback={setIsLogin}
        ></LoginDialog>

        <main className="main">
          <div className="content">
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
