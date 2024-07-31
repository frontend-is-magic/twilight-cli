import { GithubOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import ThemeSwitch from './ThemeSwitch.tsx'
import LanguageSwitch from './LanguageSwitch.tsx'
import useLanguage, { Language } from '../stores/useLanguage.ts'

type MenuItem = Required<MenuProps>['items'][number]

const getMenuItems = (language: Language): MenuItem[] => {
    return [
        {
            label: (
                <Link to="/learning">
                    <span className="text-black">{language === 'zh-CN' ? '学习' : 'Learning'}</span>
                </Link>
            ),
            key: '/learning',
        },
    ]
}

export default function TopNavigator() {
    const language = useLanguage((state) => state.language)
    const { pathname } = useLocation()

    return (
        <div className="flex w-full flex-row items-center justify-between">
            <div className="flex grow flex-row items-center space-x-2">
                <Link className="flex flex-row items-center gap-1 space-x-1" to="/">
                    <Icon icon="mdi:horseshoe" fontSize={24} />
                    <p className="text-xl font-bold text-inherit">Twilight Cli</p>
                </Link>
                <div>
                    <Menu
                        className="w-full grow border-b-slate-50 bg-slate-50"
                        selectedKeys={[pathname]}
                        mode="horizontal"
                        items={getMenuItems(language)}
                    />
                </div>
            </div>
            <div className="flex flex-row space-x-6">
                <LanguageSwitch />
                <ThemeSwitch />
                <Link target="_blank" to="https://github.com/FriendshipMagic/twilight-cli">
                    <GithubOutlined className="flex flex-col justify-center text-2xl" />
                </Link>
            </div>
        </div>
    )
}
