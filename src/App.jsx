import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <div className="">Home Page</div>
    },
    {
      path:"/contact",
      element: <div className="">Contact us</div>
    },
    {
      path:"/About",
      element: <div className="">About us</div>
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App