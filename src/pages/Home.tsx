import { Layout } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import TopNavigator from '../components/TopNavigator.tsx'

const { Header, Content, Footer } = Layout

export default function Home() {
    return (
        <Layout className="min-h-screen">
            <Header className="flex h-16 flex-row items-center bg-slate-50 p-5 text-black">
                <TopNavigator />
            </Header>
            <Content className="flex grow flex-col bg-slate-50 p-4 text-black">
                <Outlet />
            </Content>
            <Footer className="flex h-10 items-center justify-center bg-slate-50 text-center text-black">
                Powered by&nbsp;
                <Link className="text-blue-500" target="_blank" to="https://github.com/frontend-is-magic">
                    Frontend Is Magic
                </Link>
            </Footer>
        </Layout>
    )
}
