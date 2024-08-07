import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className="navbar-fixed">
        <nav>
          <div className="container">
            <div class="nav-wrapper">
              <Link to="/" class="brand-logo">
                Logo
              </Link>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
