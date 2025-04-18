import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Home from '../pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Tambahkan route lain di sini
    ],
  },
])