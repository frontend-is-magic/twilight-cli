import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { MoonFilled, SunFilled } from '@ant-design/icons'
import useTheme, { Theme } from '../stores/useTheme.ts'

export default function ThemeSwitchButton() {
    const theme = useTheme((state) => state.theme)
    const setTheme = useTheme((state) => state.setTheme)

    useLayoutEffect(() => {
        const themeStore = localStorage.getItem('theme') as Theme
        const html = document.querySelector('html')
        if (themeStore && html) {
            html.classList.add(themeStore)
            setTheme(themeStore)
        }
    }, [])

    const handleClick = () => {
        const html = document.querySelector('html')
        html?.classList.toggle('dark')
        setTheme(theme === 'dark' ? 'light' : 'dark')
        const newTheme = html?.classList.contains('dark') ? 'dark' : 'light'
        localStorage.setItem('theme', newTheme)
    }

    return (
        <Link to="" className="" onClick={handleClick}>
            {theme === 'dark' ? (
                <SunFilled className="flex flex-col justify-center text-2xl" />
            ) : (
                <MoonFilled className="flex flex-col justify-center text-2xl" />
            )}
        </Link>
    )
}
