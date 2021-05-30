import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

// firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useState({})

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
        var user = result.user;
        console.log(user);
        setUser(user);
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
    <div className="pt-5" style={{textAlign: 'center'}}>
      <button onClick={handleGoogleSignIn}>Google SignIn</button>
      <h3>{user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
};

export default Login;
