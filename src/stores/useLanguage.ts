import { create } from 'zustand'

export type Language = 'zh-CN' | 'en'

interface LanguageState {
    language: Language
    setLanguage: (language: Language) => void
}

const useLanguage = create<LanguageState>((set) => ({
    language: 'zh-CN',
    setLanguage: (language: Language) =>
        set(() => ({
            language,
        })),
}))

export default useLanguage
