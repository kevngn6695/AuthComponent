import React, { useState } from "react";

function forgetPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="">
      <h1 className="">Forgot Password</h1>
      <p className="mb-6">Please enter your email to reset your password.</p>
      <form className="forget-password-form">
        <input
          type="email"
          placeholder="Email"
          className="email-input"
          required
        />
        <button type="submit" className="pw-input">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
export default React.memo(forgetPassword);
