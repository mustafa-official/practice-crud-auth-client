import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddCoffee from "../pages/AddCoffee";
import ViewDetails from "../pages/ViewDetails";
import Update from "../pages/Update";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthUser from "../pages/AuthUser";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://practice-crud-auth-server.vercel.app/user"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://practice-crud-auth-server.vercel.app/user/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://practice-crud-auth-server.vercel.app/user/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/authUser",
        element: <AuthUser></AuthUser>,
        loader: () =>
          fetch("https://practice-crud-auth-server.vercel.app/authUser"),
      },
    ],
  },
]);
export default router;
