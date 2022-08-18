import { gql } from "@apollo/client";

const CORE_AVATAR_FIELDS = gql`
  fragment avatar on UsersPermissionsUser {
    avatar {
      data {
        attributes {
          formats
        }
      }
    }
  }
`;

export { CORE_AVATAR_FIELDS };
