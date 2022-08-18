import { gql } from "@apollo/client";

const ALL_EVENTS = gql`
  {
    events {
      data {
        id
        attributes {
          title
          date
          time
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

const ONE_EVENT = gql`
  query event($id: ID!) {
    event(id: $id) {
      data {
        id
        attributes {
          title
          time
          date
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export { ALL_EVENTS, ONE_EVENT };
