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
import Error from './Components/Error';
import AuthProvider from './AuthProvider/AuthProvider';
import ViewDetailsAllCraft from './Pages/ViewDetailsAllCraft/ViewDetailsAllCraft';
import Update from './Pages/Update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/artAndCraft',
        element: <ArtAndCraft />,
        loader:()=>fetch('http://localhost:5000/painting')
      },
      {
        path:'/artAndCraft/:id',
        element:<ViewDetailsAllCraft/>,
        loader:({params})=>fetch(`http://localhost:5000/painting/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update/>,
        loader:({params})=>fetch(`http://localhost:5000/painting/${params.id}`)
      },
      {
        path: '/addCraftItems',
        element: <AddCraftItems />
      },
      {
        path: '/myArtAndCraftList',
        element: <MyArtAndCraftList />
      },
      {
        path: '/logIn',
        element: <LogIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);