import { useLayoutEffect } from 'react'
import useTheme from '../stores/useTheme.ts'
import { Icon } from '@iconify/react'

export default function ThemeSwitchButton() {
    const theme = useTheme((state) => state.theme)
    const setTheme = useTheme((state) => state.setTheme)

    useLayoutEffect(() => {
        const html = document.querySelector('html')

        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        html?.classList.add(systemTheme)
        setTheme(systemTheme)

        // 无需刷新，自动根据系统设置切换主题
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            const newTheme = e.matches ? 'dark' : 'light'
            html?.classList.toggle('dark', newTheme === 'dark')
            setTheme(newTheme)
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', handleSystemThemeChange)

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange)
        }
    }, [setTheme])

    const handleClick = () => {
        const html = document.querySelector('html')
        html?.classList.toggle('dark')
        const newTheme = html?.classList.contains('dark') ? 'dark' : 'light'
        setTheme(newTheme)
    }

    return (
        <div className="cursor-pointer" onClick={handleClick}>
            {theme === 'dark' ? (
                <Icon icon="icon-park-outline:english" className="flex flex-col justify-center text-2xl" />
            ) : (
                <Icon icon="icon-park-outline:chinese" className="flex flex-col justify-center text-2xl" />
            )}
        </div>
    )
}
