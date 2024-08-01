import React from 'react'
import { Icon } from '@iconify/react'
import { ReactRouterIcon, ZustandIcon } from '../components/icons.tsx'

export interface DevTool {
    name: string
    icon: React.ReactNode
    link: string
}

export const devTools: DevTool[] = [
    {
        name: 'React',
        icon: <Icon icon="devicon:react" className="text-7xl md:text-8xl" />,
        link: 'https://react.dev/',
    },
    {
        name: 'Vite',
        icon: <Icon icon="devicon:vitejs" className="text-7xl md:text-8xl" />,
        link: 'https://vitejs.dev/',
    },
    {
        name: 'React Router',
        icon: <ReactRouterIcon />,
        link: 'https://reactrouter.com/en/main',
    },
    {
        name: 'Zustand',
        icon: <ZustandIcon />,
        link: 'https://zustand-demo.pmnd.rs/',
    },
    {
        name: 'Ant Design',
        icon: <Icon icon="devicon:antdesign" className="text-7xl md:text-8xl" />,
        link: 'https://ant.design/index-cn',
    },
    {
        name: 'Tailwind CSS',
        icon: <Icon icon="devicon:tailwindcss" className="text-7xl md:text-8xl" />,
        link: 'https://tailwindcss.com',
    },
]
