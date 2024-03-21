import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BookMarks from './pages/BookMarks.jsx'
import Mainlayout from './layouts/Mainlayout.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/blogs',
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=20'),
        element: <Blogs />
      },
      {
        path: '/bookmarks',
        element: <BookMarks />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
