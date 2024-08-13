import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
import { useMutation } from "@apollo/client";
import { SIGN_UP_USER } from "../graphqloperations/Mutations";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";

const Signup = () => {
  const [signUpUser, { data, loading, error }] = useMutation(SIGN_UP_USER);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    let signUpForm = {
      firstName,
      lastName,
      email,
      password,
    };
    if (!firstName || !lastName || !email || !password) {
      toast.error(
        `${
          !firstName
            ? "Path FirstName is required"
            : !lastName
            ? "Path LastName is required"
            : !email
            ? "Path Email is required"
            : !password
            ? "Path Password is required"
            : ""
        }`
      );
      return;
    }
    signUpUser({
      variables: {
        userNew: signUpForm,
      },
    });
  };

  if (loading) return <Loading height={true} />;

  return (
    <Fragment>
      <div className="container login-row">
        <form onSubmit={handleSignup}>
          {error && <div className="red card-panel">{error.message}</div>}
          <input
            type="text"
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            Already Have an Account? <Link to={`/login`}>Login</Link>
          </p>
          <button type="submit" className="btn #673ab7 deep-purple">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Signup;
