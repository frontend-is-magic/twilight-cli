import { create } from 'zustand'

export type Theme = 'dark' | 'light'

interface ThemeState {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const useTheme = create<ThemeState>((set) => ({
    theme: 'light',
    setTheme: (theme: Theme) =>
        set(() => ({
            theme,
        })),
}))

export default useTheme
