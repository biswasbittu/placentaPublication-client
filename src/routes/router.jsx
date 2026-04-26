import { createBrowserRouter } from "react-router";
import Rootlayouts from "../layouts/Rootlayouts";
import Home from "../pages/Home/Home/Home";
import MembersDetails from "../component/MembersDetails/MembersDetails";
import Shop from "../pages/Shop/Shop";
import Authlayouts from "../layouts/Authlayouts";
import Login from "../pages/Shop/Auth/Login/Login";
import Register from "../pages/Shop/Auth/Register/Register";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayouts,
    children:[
        {
            index:true,
            loader: async () => {
          // wait for fetch to finish
          const res = await fetch("/team.json");
          // convert response to json
          const data = await res.json();
          // return data to component
          return data;
        },
            Component:Home
        },
        {
          path:'members/:id',
          loader: async () => {
          const res = await fetch("/team.json");
          const data = await res.json();
          return data;
        },
          Component:MembersDetails,
        },
        {
          path:'shop',
          Component:Shop
        }
    ]
  },
  {
    path:'/',
    Component:Authlayouts,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      }
    ]
  }
]);

