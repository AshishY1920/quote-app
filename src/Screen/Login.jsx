import React, { Fragment, useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("LOGIN DATA: ", email, password);
  };
  return (
    <Fragment>
      <div className="container login-row">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            Don't Have an Account? <Link to={`/signup`}>SignUp</Link>
          </p>
          <button type="submit" className="btn #673ab7 deep-purple">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
