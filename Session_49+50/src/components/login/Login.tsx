import React from "react";
import { useLocation } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  console.log(location);
  const handleChage = () => {};
  return (
    <div>
      Login
      <br />
      <label htmlFor="">email</label>
      <input
        onChange={handleChage}
        value={location.state.email}
        type="text"
      />{" "}
      <br />
      <label htmlFor="">password</label>
      <input
        onChange={handleChage}
        value={location.state.password}
        type="text"
      />{" "}
      <br />
      <button>Login</button>
    </div>
  );
}
