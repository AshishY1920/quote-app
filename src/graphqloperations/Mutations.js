import { gql } from "@apollo/client";

export const SIGN_UP_USER = gql`
  mutation RegisterUser($userNew: UserInput!) {
    user: SignUpUser(userNew: $userNew) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($userSignIn: UserSignInInput!) {
    user: SignInUser(userSignIn: $userSignIn) {
      token
    }
  }
`;
