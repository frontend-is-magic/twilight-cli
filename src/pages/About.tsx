import { subtitle, title } from '../utils/primitives.ts'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import useLanguage from '../stores/useLanguage.ts'
import CopyableCode from '../components/CopyableCode.tsx'

export default function About() {
    const language = useLanguage((state) => state.language)

    return (
        <div className="flex h-[90vh-4rem] w-full grow flex-col items-center justify-center">
            <div className="inline-block max-w-lg justify-center text-center">
                <span className={title({ color: 'violet' })}>Twilight Cli</span>
                <h2 className={subtitle({ class: 'mt-4' })}>
                    {language === 'zh-CN'
                        ? '前端是魔法：快速构建现代 React 项目'
                        : 'Frontend is Magic: Quickly start a modern React app'}
                </h2>
            </div>
            <div className="mt-8 flex items-center justify-center gap-3">
                <Link to="learning">
                    <Button shape="round" className="text-lg" type="primary">
                        {language === 'zh-CN' ? '了解更多' : 'Learn More'}
                        <ArrowRightOutlined />
                    </Button>
                </Link>
            </div>
            <div className="absolute bottom-14 hidden flex-col items-center justify-center md:flex">
                <div>
                    <CopyableCode code="npm install -g create-twilight-app" />
                </div>
                <div>
                    <CopyableCode code="npx create-twilight-app" />
                </div>
            </div>
        </div>
    )
}
