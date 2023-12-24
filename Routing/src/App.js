import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import RootLayout from "./page/Root";
import ErrorPage from "./page/error";
import EventPage from "./page/EventPage";
import EventDetailPage from "./page/EventDetailPage";
import NewEventPage from "./page/NewEventPage";
import EditEventPage from "./page/EditEventPage";

const route = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventPage />,
      },
      {
        path: "events/:id",
        element: <EventDetailPage />,
      },
      {
        path: "events/new",
        element: <NewEventPage />,
      },
      { path: "events/:id/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
