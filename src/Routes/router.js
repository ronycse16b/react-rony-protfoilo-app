import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/Contact/Contact";


import Details from "../pages/projects/Details";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([


  {
    path: '/',
    element: <Main></Main>,



    children: [

      {
        path: '/',
        element: <Home></Home>,


      },
  
      {
        path: '/about',
        element: <About></About>,


      },
      {
        path: '/projects',
        element: <Projects></Projects>,
        loader: async() =>{
          return fetch("https://protfolio-server-ronycse16b.vercel.app/projects");
      }


      },
      {
        path: 'details/:id',
        loader: ({ params }) => {
          return fetch(`https://protfolio-server-ronycse16b.vercel.app/projects/${params.id}`);
        },
        element: <Details></Details>,


      },
      {
        path: '/contact',
        element: <Contact></Contact>


      },
      {
        path: '/blog',
        element: <Blog></Blog>


      },





    ]
  },


]) 