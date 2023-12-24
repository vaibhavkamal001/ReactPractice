import { Link } from "react-router-dom";
import Card from "../component/UI/Card";

const DUMMYEVENT = [
  {
    id: "e1",
    name: "event 1",
  },
  {
    id: "e2",
    name: "event 2",
  },
  {
    id: "e3",
    name: "event 3",
  },
  {
    id: "e4",
    name: "event 4",
  },
  {
    id: "e5",
    name: "event 5",
  },
];

const EventPage = () => {
  return (
    <>
      <h1>EventPage</h1>
      <Link to={"new"}>NewEventPage</Link>
      {DUMMYEVENT.map((ele) => {
        return (
          <Card>
            <Link to={`${ele.id}/edit`}>{`${ele.name} Edit`}</Link>
            <Link to={`${ele.id}`}>{`${ele.name} Details`}</Link>
            <Link to={".."} relative="path">
              Back
            </Link>
          </Card>
        );
      })}
    </>
  );
};

export default EventPage;
