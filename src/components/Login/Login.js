import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email, photo: photoURL };
        setLoggedInUser(signInUser);
        // localStorage.setItem('user', JSON.stringify(signInUser));
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div className="text-center pt-5 mt-5">
      <button className="btn-card fw-bold" onClick={handleGoogleSignIn}>
        Continue with Google
      </button>
      <button className="btn-card mx-2" style={{ fontWeight: "bold" }}>
        <a href="https://bd-bliss.web.app/">Go to Home</a>
      </button>
    </div>
  );
};

export default Login;
