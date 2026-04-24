import { createBrowserRouter } from "react-router";
import Rootlayouts from "../layouts/Rootlayouts";
import Home from "../pages/Home/Home/Home";
import MembersDetails from "../component/MembersDetails/MembersDetails";



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
        }
    ]
  },
]);