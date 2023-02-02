import React from "react";
import { useState } from "react";

// Email Validation
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isPassword = (password) => {
  if (!password || password.length < 7 || password.length > 15) {
    return false;
  }

  return true;
};

const isEmpty = (value) => {
  if (!value || value.length < 5 || value.length > 30) {
    return false;
  } else {
    return true;
  }
};

function App() {
  const [nameInput, setNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleSubmit = () => {
    // validation of inputs

    // Email Validation
    if (!isEmail(emailInput)) {
      setError("Your Email is Invalid");
      return;
    }

    // Password validation
    if(!isPassword(passwordInput)){
      setError("Your Password is not valid");
      return;
    }

    setError(null);
    setSuccess("Your fields are valid, and have been submitted")
    return;
  };

  return (
    <div>
      <p>
        <label> Name : </label>
        <input
          type="text"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <br />
        <label> Email : </label>
        <input
          type="text"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
        />
        <br />
        <label> Password : </label>
        <input
          type="text"
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
        />

        <p>{error && <p>{error}</p>}</p>
        <p>{success && <p>{success}</p>}</p>
        

        <br />
        <button onClick={handleSubmit}>SUBMIT</button>
      </p>
    </div>
  );
}

export default App;

// Thank you for watching, pls subscribe
