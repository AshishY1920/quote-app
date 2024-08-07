import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

const Signup = () => {
  return (
    <Fragment>
      <div className="container login-row">
        <form>
          <input type="text" placeholder="FirstName" />
          <input type="text" placeholder="LastName" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
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
