import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <ul>
        <li>{params.id}</li>
        <li>
          <Link to={".."} relative="path">
            Back
          </Link>
        </li>
      </ul>
    </>
  );
};

export default EventDetailPage;
