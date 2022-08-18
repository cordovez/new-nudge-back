import { gql } from "@apollo/client";
import { CORE_AVATAR_FIELDS } from "./fragments";
const USERS = gql`
  {
    usersPermissionsUsers {
      data {
        id
        attributes {
          username
          email
        }
      }
    }
  }
`;

const USER = gql`
  ${CORE_AVATAR_FIELDS}
  query usersPermissionsUsers($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          firstName
          email
          ...avatar
        }
      }
    }
  }
`;

const GENERIC_AVATAR = gql`
  query getAvatar {
    genericAvatar {
      data {
        attributes {
          genericMan {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { USERS, USER, GENERIC_AVATAR };
