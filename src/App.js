import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

import "./App.css";

function App() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = async () => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // Login User
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log(user);
  };

  const signUpHandler = async () => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // Login User
    const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log(user);
  };

  return (
    <div className="App">
      Email
      <input type="text" ref={emailInputRef} />
      <br />
      Password
      <input type="text" ref={passwordInputRef} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default App;
