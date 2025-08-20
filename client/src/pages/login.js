import React, { useState } from "react";

import Form from "../components/form";
import Link from "../components/link";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <Form
        className="login-input-form"
        title="login"
        fields={[
          {
            email: "email",
            type: "email",
            required: true,
            placeholder: "Email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
          },
          {
            password: "password",
            type: "password",
            required: true,
            placeholder: "Password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
          },
          {
            name: "rememberMe",
            type: "checkbox",
            label: "Remember Me",
            checked: rememberMe,
            onChange: (e) => setRememberMe(e.target.checked),
          },
        ]}
        submitText="Login"
      />
      <Link>Forget Password</Link>
    </>
  );
}

export default React.memo(Login);
