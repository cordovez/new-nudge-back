import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ONE_EVENT } from "../../GraphQL/eventQueries";

const Event = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(ONE_EVENT, {
    variables: { id },
  });

  if (loading) return <p>data is loading</p>;
  if (error) return <p>{`This ${error}`}</p>;

  const event = data.event.data.attributes;
  const image = event.image.data.attributes.formats.small.url;

  const baseURL = "http://localhost:1337";
  const imageURI = baseURL + image;

  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <img src={imageURI} alt="" />
    </div>
  );
};

export default Event;
