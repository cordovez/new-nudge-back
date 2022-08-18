import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from "../GraphQL/eventQueries";
import { Link } from "react-router-dom";
// const EVENTS =

const Events = () => {
  const { loading, error, data } = useQuery(ALL_EVENTS);

  if (loading) return <p>data is loading</p>;
  if (error) return <p>{`there was an ${error}`} </p>;

  const events = data.events.data;

  return (
    <>
      {events.map((event) => {
        const thumbnail =
          event.attributes.image.data.attributes.formats.thumbnail.url;

        return (
          <div key={event.id}>
            <Link to={`/events/${event.id}`}>
              <h1>{event.attributes.title}</h1>
            </Link>

            <p>{event.attributes.date}</p>
            <p>{event.attributes.time}</p>
            <div>
              <img src={`http://localhost:1337${thumbnail}`} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Events;
