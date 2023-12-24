import { useLoaderData } from "react-router-dom";
import EventsList from "./EventsList";

export const EventPage = () => {
  const events = useLoaderData();
  console.log(events);
  return <EventsList events={events.events} />;
};

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
  }
  const data = await response.json();
  return data;
};
