import { gql } from 'apollo-angular';

const GET_PATIENTS = gql`
  query {
    patients {
      _id
      name
      age
      dob
      gender
      address {
        city
        state
        street
        zip
      }
    }
  }
`;

const CREATE_PATIENT = gql`
  mutation CreatePatient($input: PatientInput!) {
    createPatient(input: $input) {
      _id
      name
      dob
      age
      address {
        street
        city
        state
        zip
      }
    }
  }
`;

const DELETE_PATIENT = gql`
  mutation DeletePatient($id: String!) {
    deletePatient(id: $id) {
      _id
    }
  }
`;

const UPDATE_PATIENT = gql`
  mutation UpdatePatient($id: String!, $input: PatientUpdateInput!) {
    updatePatient(id: $id, input: $input) {
      name
    }
  }
`;

// const GET_POSTS_BY_USERNAME = gql`
//   query GetPostsByUsername($username: String!) {
//     posts(username: $username) {
//       id
//       title
//       description
//     }
//   }
// `;

export { GET_PATIENTS, CREATE_PATIENT, DELETE_PATIENT, UPDATE_PATIENT };
