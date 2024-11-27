import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Index'
import Users from './pages/Users'

const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />

    },
    {
        path: '/Clients',
        element: < Users />
    }
])

export default router