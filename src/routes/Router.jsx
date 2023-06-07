import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Summary from "../pages/summary/Summary";
import Bookings from "../pages/booking/Bookings";
import BookingForm from "../pages/booking/BookingForm";

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
          path:"/bookings/form/:bookId",
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