import React, { Fragment, useEffect, useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphqloperations/Mutations";

const Login = () => {
  const navigate = useNavigate();
  const [SignInUser, { data, loading, error }] = useMutation(LOGIN_USER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("LOGIN DATA: ", email, password);
    const userSignIn = {
      email: email,
      password: password,
    };
    SignInUser({
      variables: {
        userSignIn: userSignIn,
      },
    });
  };

  useEffect(() => {
    if (data?.user?.token) {
      localStorage.setItem("quotes__token", data?.user?.token);
    }
  }, [data?.user?.token]);

  useEffect(() => {
    let isAuthorized = localStorage.getItem("quotes__token");
    if (isAuthorized) {
      navigate("/");
    }
  }, [navigate]);

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
