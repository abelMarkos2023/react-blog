import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Blogs from './Pages/Blogs.jsx';
import Services from './Pages/Services.jsx';
import About from './Pages/About.jsx';
import SinglePost from './Pages/SinglePost.jsx';
import { data } from './blogsData.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
      element:<Home />
      },
      {
        path:"/contact",
       element:<Contact />
    },
    {
      path:"/about",
     element:<About />
  },
      {
        path:"/blogs",
       element:<Blogs />

      },
      {
        path:"/services",
      element:<Services />
      },
      {
        path:"/blogs/:id",
        element:<SinglePost />,
        loader:({params}) => data.filter(d => d.id == params.id)
      }
    ]
      
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
