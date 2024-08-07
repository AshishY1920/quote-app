import React, { Fragment } from "react";
import "../Styles/Profile.css";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Quotes from "../Components/Quotes";

const quotes = [
  { createdBy: "Ashish Yadav", quote: "I turn Coffee Into code." },
  { createdBy: "Ashish Yadav", quote: "If it works don't touch it." },
];

const Profile = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="container profile">
        <Link onClick={() => navigate(-1)} className="header-row">
          <IoReturnDownBackOutline size={32} />
          <h4>Profile</h4>
        </Link>
        <div className="profile-container">
          <div className="img-container">
            <img src="https://robohash.org/ashish.png?size=200x200" alt="" />
          </div>
          <h4>Ashish Yadav</h4>
        </div>

        {/* Quotes */}
        {quotes.map((i, index) => (
          <Quotes quote={i.quote} key={index} />
        ))}
        {/* Quotes */}
      </div>
    </Fragment>
  );
};

export default Profile;
