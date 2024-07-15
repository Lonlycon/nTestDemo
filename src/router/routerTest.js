import Login from "../Login.js"
import Ben from "../Ben.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Login />
    element: <Ben />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router