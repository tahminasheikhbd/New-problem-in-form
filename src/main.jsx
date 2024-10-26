/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormNumber1 from "./pages/form-1.jsx";
import FormNumber2 from "./pages/form-2.jsx";
import FormNumber3 from "./pages/form-3.jsx";
import FormNumber4 from "./pages/form-4.jsx";
import NotFound from "./pages/notfound.jsx";
import MainLayout from "./layouts/Mainlayout.jsx";

const formRouting = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <FormNumber1 /> },
      {
        path: "form2",
        element: <FormNumber2 />,
      },
      {
        path: "form3",
        element: <FormNumber3 />,
      },

      {
        path: "form4",
        element: <FormNumber4 />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={formRouting} />
  </StrictMode>
);
