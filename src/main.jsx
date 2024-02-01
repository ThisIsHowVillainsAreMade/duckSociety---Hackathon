import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/Accueil";
import BalanceTaSorciere from "./pages/BalanceTaSorciere";
import MarketplaceViking from "./pages/MarketplaceViking";
import TutorielPrehistoire from "./pages/TutorielPrehistoire";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Accueil /> },
      { path: "/balance-ta-sorciere", element: <BalanceTaSorciere /> },
      { path: "/marketplace-pour-vikings", element: <MarketplaceViking /> },
      {
        path: "/tutoriel-pour-homme-prehistorique",
        element: <TutorielPrehistoire />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
