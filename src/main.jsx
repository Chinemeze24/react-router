import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import HomePage from "./pages/homePage.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/rootPage.jsx";
import Contact from "./pages/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/AboutPage",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
