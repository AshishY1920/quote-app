import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    Quotes {
      quote
      owner {
        _id
        firstName
      }
    }
  }
`;
