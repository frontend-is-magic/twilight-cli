import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import About from '../pages/About.tsx'
import Resource from '../pages/Resource.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <About />,
            },
            {
                path: 'resource',
                element: <Resource />,
            },
        ],
    },
])
