import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Home/Home";
import ContactUs from "../ContactUS/ContactUs";
import OurService from "../OurService/OurService";
import Login from "../Login/Login";
import Details from "../seeDetails/Details";

  

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
              path: "/details/:id",
              element: <Details></Details>,
               loader: () =>fetch('/data.json')
            },
          ]
      
    }
  ])
  export default router;