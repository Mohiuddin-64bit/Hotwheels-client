import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddToy from "../Pages/AddToy/AddToy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarDetails from "../Pages/Home/ShopByCategory/CarDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: '/carDetails/:id',
        element: <PrivateRouter><CarDetails></CarDetails></PrivateRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/allToy/carDetails/${params.id}`)
        
      }
    ],
  },
]);

export default router;
