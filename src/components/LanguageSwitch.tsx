import { useLayoutEffect } from 'react'
import { Icon } from '@iconify/react'
import useLanguage from '../stores/useLanguage.ts'

export default function LanguageSwitch() {
    const language = useLanguage((state) => state.language)
    const setLanguage = useLanguage((state) => state.setLanguage)

    useLayoutEffect(() => {
        const systemLanguage = (navigator.language || 'en').startsWith('zh') ? 'zh-CN' : 'en'
        setLanguage(systemLanguage)
    }, [setLanguage])

    const handleClick = () => {
        setLanguage(language === 'en' ? 'zh-CN' : 'en')
    }

    return (
        <div className="cursor-pointer" onClick={handleClick}>
            {language === 'zh-CN' ? (
                <Icon icon="icon-park-outline:english" className="flex flex-col justify-center text-2xl" />
            ) : (
                <Icon icon="icon-park-outline:chinese" className="flex flex-col justify-center text-2xl" />
            )}
        </div>
    )
}
