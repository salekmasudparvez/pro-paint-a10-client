import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import ArtAndCraft from './Pages/ArtAndCraft/ArtAndCraft';
import AddCraftItems from './Pages/AddCraftItems/AddCraftItems';
import MyArtAndCraftList from './Pages/MyArtAndCraftList/MyArtAndCraftList';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/artAndCraft',
        element:<ArtAndCraft/>
      },
      {
        path:'/addCraftItems',
        element:<AddCraftItems/>
      },
      {
        path:'/myArtAndCraftList',
        element:<MyArtAndCraftList/>
      },
      {
        path:'/logIn',
        element:<LogIn/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);