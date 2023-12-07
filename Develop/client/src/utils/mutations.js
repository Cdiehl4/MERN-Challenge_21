import { gql } from '@apollo/client';
export const ADD_BOOK = gql`
mutation Mutation($bookData: BookInput!) {
  addBook(bookData: $bookData) {
    _id
    username
    email
    password
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;
export const REMOVE_BOOK = gql`
mutation Mutation($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    email
    username
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;