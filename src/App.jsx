import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppUi from "./components/layout/AppUi";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";



const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppUi/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/contact",
          element: <Contact/>,
        },
        {
          path:"/about",
          element: <About/>
        },
      ]
    }
  ]);
  return <RouterProvider router={router}/>;
};

export default App;
