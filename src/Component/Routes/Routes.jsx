import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Home/Home";

import OurService from "../OurService/OurService";
import Login from "../Login/Login";
import Details from "../seeDetails/Details";
import Register from "../Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Rental from "../EventEquipment/Rental";
import OfferSevices from "../Eventservices/OfferSevices";
import About from "../About/About";

  

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/OurServices",
              element: <OurService></OurService>,
            },
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "/login",
              element: <Login></Login>,
            },
            {
              path: "/register",
              element: <Register></Register>,
            },
            {
              path: "/eventEquipment",
              element: <PrivetRoute><Rental></Rental></PrivetRoute>,
            },
            {
              path: "/eventcategory",
              element: <PrivetRoute><OfferSevices></OfferSevices></PrivetRoute>,
            },
            {
              path: "/details/:id",
              element:<PrivetRoute><Details></Details></PrivetRoute>,
               loader: () =>fetch('/data.json')
            },
          ]
      
    }
  ])
  export default router;