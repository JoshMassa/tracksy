import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddExpense from "./pages/AddExpense.jsx";
import History from "./pages/History.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "add-expense",
        element: <AddExpense />,
      },
      {
        path: "history",
        element: <History />,
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      // {
      //   path: "signup",
      //   element: <Signup />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
