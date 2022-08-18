import { useQuery } from "@apollo/client";
import { USERS } from "../GraphQL/userQueries";
import { Link } from "react-router-dom";

const Users = () => {
  const { loading, error, data } = useQuery(USERS);

  if (loading) return <p>data is loading</p>;
  if (error) return <p>{`This ${error}`}</p>;
  const results = data.usersPermissionsUsers.data;
  return (
    <>
      {results.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>
              <ul type="1">
                <li>
                  <span>{user.attributes.username}: </span>
                  <span>{user.attributes.email}</span>
                </li>
              </ul>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Users;
