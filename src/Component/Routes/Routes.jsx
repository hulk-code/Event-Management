import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Home/Home";
import ContactUs from "../ContactUS/ContactUs";
import OurService from "../OurService/OurService";
import Login from "../Login/Login";
import Details from "../seeDetails/Details";
import Register from "../Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Rental from "../EventEquipment/Rental";
import OfferSevices from "../Eventservices/OfferSevices";

  

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
              path: "/contact",
              element: <ContactUs></ContactUs>,
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