import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Summary from "../pages/Summary";
import Bookings from "../pages/Bookings";
import Form from "../pages/BookingForm";
import BookingForm from "../pages/BookingForm";

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
          path:"/bookings/form",
          element: <BookingForm></BookingForm>
        },
        {
          path:"/bookings",
          element: <Bookings></Bookings>
        }
      ]
    },
  ]);

export default router;