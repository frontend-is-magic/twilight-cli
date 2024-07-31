import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import About from '../pages/About.tsx'
import Learning from '../pages/Learning.tsx'

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
                path: 'learning',
                element: <Learning />,
            },
        ],
    },
])
