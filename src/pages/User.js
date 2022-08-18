import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { USER, GENERIC_AVATAR } from "../GraphQL/userQueries";

const User = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(USER, {
    variables: { id },
  });
  const {
    loading: avatarLoading,
    error: avatarError,
    data: avatarData,
  } = useQuery(GENERIC_AVATAR);

  if (loading || avatarLoading) return <p>data is loading</p>;
  if (error || avatarError) return <p>{`there was an error ${error}`}</p>;

  const user = data.usersPermissionsUser.data;

  // which profile picture to use, genericAvatar or avatar? ...
  const genericAvatar =
    avatarData.genericAvatar.data.attributes.genericMan.data.attributes.url;

  let avatar;
  if (!user.attributes.avatar.data) {
    avatar = genericAvatar;
  } else {
    avatar = user.attributes.avatar.data.attributes.formats.thumbnail.url;
  }

  // Need better solution for baseURL
  const baseURL = "http://localhost:1337";
  const avatarURI = baseURL + avatar;

  return (
    <>
      <div>
        <img src={avatarURI} alt="" />
      </div>
      <small>{user.id}</small>
      <p>
        <span>{user.attributes.username}: </span>{" "}
        <span>{user.attributes.email}</span>
      </p>
    </>
  );
};

export default User;
