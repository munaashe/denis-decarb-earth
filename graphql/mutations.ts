import { gql } from '@apollo/client';

export const TEST_REGISTER_MUTATION = gql`
  mutation testRegister(
    $firstName: String!
    $lastName: String!
    $entityType: String!
    $email: String!
    $password: String!
  ) {
    testRegister(
      input: {
        firstName: $firstName
        lastName: $lastName
        entityType: $entityType
        email: $email
        password: $password
      }
    ) {
      success
      message
      user {
        id
        firstName
        lastName
      }
    }
  }
`;