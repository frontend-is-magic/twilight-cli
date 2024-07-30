import { GithubOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import ThemeSwitchButton from './ThemeSwitchButton.tsx'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
    {
        label: (
            <Link to="doc">
                <span className="text-black">资源</span>
            </Link>
        ),
        key: '/doc',
    },
]

export default function TopNavigator() {
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
                        className="grow border-b-slate-50 bg-slate-50"
                        selectedKeys={[pathname]}
                        mode="horizontal"
                        items={items}
                    />
                </div>
            </div>
            <div className="flex flex-row space-x-6">
                <ThemeSwitchButton />
                <Link target="_blank" to="https://github.com/FriendshipMagic/twilight-cli">
                    <GithubOutlined className="flex flex-col justify-center text-2xl" />
                </Link>
            </div>
        </div>
    )
}
