import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddToy from "../Pages/Home/AddToy/AddToy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarDetails from "../Pages/Home/ShopByCategory/CarDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import AllToy from "../Pages/Home/AllToy/AllToy";
import MyToy from "../Pages/Home/MyToy/MyToy";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import Blog from "../Pages/Home/Blog/Blog";
import UpdatePage from "../Pages/Home/Update/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    ),
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRouter><AddToy></AddToy></PrivateRouter>,
      },
      {
        path: 'allToy',
        element: <AllToy></AllToy>
      },
      {
        path: 'myToy',
        element: <MyToy></MyToy>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      // {
      //   path: '/updatePage',
      //   element: <UpdatePage></UpdatePage>
      // },
      {
        path: '/carDetails/:id',
        element: <PrivateRouter><CarDetails></CarDetails></PrivateRouter>,
        loader: ({params}) => fetch(`https://hotwheels-server.vercel.app/allToy/carDetails/${params.id}`)
        
      }
    ],
  },
]);

export default router;
