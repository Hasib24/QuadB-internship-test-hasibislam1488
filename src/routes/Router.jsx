import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Summary from "../pages/Summary";
import Bookings from "../pages/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/showsammary/:id",
          element: <Summary></Summary>
        },
        {
          path:"/bookings",
          element: <Bookings></Bookings>
        }
      ]
    },
  ]);

export default router;