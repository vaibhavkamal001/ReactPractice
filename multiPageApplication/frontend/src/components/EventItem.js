import { useParams } from "react-router-dom";
import classes from "./EventItem.module.css";

export async function loader({ eventId }) {
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
  }

  return await response.json();
}

export function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
