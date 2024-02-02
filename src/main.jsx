import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home"
import Fire from  "./pages/Fire"
import Shop from "./pages/Shop"
import Basket from "./pages/Basket";
import Witch from "./pages/Witch"
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tuto-feu", element: <Fire /> },
      { path: "/mallhalla", element: <Shop /> },
      { path: "/mallhalla/:id", element: <Basket /> },
      { path: "/balance-ta-sorciere", element: <Witch /> },
      // { path: "/testform", element: <WitchForm /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
