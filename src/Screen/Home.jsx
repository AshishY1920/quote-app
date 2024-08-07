import React, { Fragment } from "react";
import Quotes from "../Components/Quotes";
import "../Styles/Home.css";
import "../Styles/Profile.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../graphqloperations/queries";
import Loading from "../Components/Loading";

const quotes = [
  { createdBy: "Ashish Yadav", quote: "I turn Coffee Into code." },
  { createdBy: "Ashish Yadav", quote: "If it works don't touch it." },
];

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) return <Loading height={true} />;
  if (error) {
    console.log(error.message);
  }

  console.log("DATA:", data);

  return (
    <Fragment>
      <div className="container home-wrapper">
        {/* Quotes */}
        {data.Quotes.map((i, index) => (
          <Quotes quote={i.quote} key={index} author={i.owner.firstName} />
        ))}
        {/* Quotes */}
      </div>
    </Fragment>
  );
};

export default Home;
