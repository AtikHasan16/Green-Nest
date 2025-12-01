import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import PlantDetails from "../Pages/PlantDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import ErrorPage from "../Error/ErrorPage";
import Loading from "../Components/Loading";
import PrivateRouter from "./PrivateRouter";
import GuestRouter from "./GuestRouter";
import ForgetPass from "../Pages/ForgetPass";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <Home></Home>,
      },
      {
        path: "/plants",
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <Plants></Plants>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <MyProfile></MyProfile>,
          </PrivateRouter>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRouter>
            <PlantDetails></PlantDetails>,
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: (
          <GuestRouter>
            <Login></Login>
          </GuestRouter>
        ),
      },
      {
        path: "/registration",
        element: (
          <GuestRouter>
            <Registration></Registration>,
          </GuestRouter>
        ),
      },
      {
        path: "forgetPass",
        element: (
          <GuestRouter>
            <ForgetPass></ForgetPass>,
          </GuestRouter>
        ),
      },
    ],
  },
]);
