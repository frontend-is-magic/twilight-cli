import '../global.css'
import { Link } from 'react-router-dom'
import { DevTool } from '../utils/constant.tsx'

export default function ToolCard({ name, icon, link }: DevTool) {
    return (
        <Link className="flex w-40 flex-col items-center justify-center space-y-3" target="_blank" to={link}>
            <div>{icon}</div>
            <div className="text-2xl">{name}</div>
        </Link>
    )
}
