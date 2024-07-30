import ToolCard from '../components/ToolCard.tsx'
import { devTools } from '../utils/constant.tsx'

export default function Resource() {
    return (
        <div className="flex h-full w-full grow flex-col items-center justify-center space-y-20">
            {new Array(2).fill(0).map((_, rowIndex) => (
                <div key={rowIndex} className="flex flex-row items-center justify-center space-x-40">
                    {devTools.slice(rowIndex * 3, rowIndex * 3 + 3).map((tool, index) => (
                        <ToolCard key={index} {...tool} />
                    ))}
                </div>
            ))}
        </div>
    )
}
