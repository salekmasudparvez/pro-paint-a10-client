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
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import ArtAndCraftCategoryCard from './Components/ArtAndCraftCategoryCard';
import SubCategoryDetails from './Pages/SubCategoryDetails/SubCategoryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader:()=>fetch('https://painting-and-drawing-server-xi.vercel.app/painting')

      },
      {
        path: '/artAndCraft',
        element: <ArtAndCraft />,
        loader:()=>fetch('https://painting-and-drawing-server-xi.vercel.app/painting')
      },
      {
        path:'/details/:id',
        element:<PrivateRoutes><ViewDetailsAllCraft/></PrivateRoutes>, 
        loader:({params})=>fetch(`https://painting-and-drawing-server-xi.vercel.app/painting/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoutes><Update/></PrivateRoutes>,
        loader:({params})=>fetch(`https://painting-and-drawing-server-xi.vercel.app/painting/${params.id}`)
      },
      {
        path: '/addCraftItems',
        element:<PrivateRoutes><AddCraftItems /></PrivateRoutes> 
      },
      {
        path: '/myArtAndCraftList',
        element:<PrivateRoutes> <MyArtAndCraftList /></PrivateRoutes>,
        loader:()=>fetch('https://painting-and-drawing-server-xi.vercel.app/painting')
      },
      {
        path:'/ArtAndCraftCategory',
        element:<ArtAndCraftCategoryCard/>
      },
      {
        path:'/SubCategoryDetails/:id',
        element:<SubCategoryDetails/>,
        loader:({params})=>fetch(`https://painting-and-drawing-server-xi.vercel.app/subcategory/${params.id}`)

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