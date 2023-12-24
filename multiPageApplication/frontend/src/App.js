import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import { EventPage } from "./components/EventPage.js";
import { loader as EventLoader } from "./components/EventPage.js";
import {
  EventItem,
  loader as EventItemLoader,
} from "./components/EventItem.js";
const route = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
    children: [
      {
        path: "events",
        element: <EventPage />,
        loader: EventLoader,
        children: [
          {
            path: ":eventId",
            element: <EventItem />,
            loader: EventItemLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
