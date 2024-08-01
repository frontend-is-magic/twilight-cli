import ToolCard from '../components/ToolCard.tsx'
import { devTools } from '../utils/constant.tsx'

export default function Learning() {
    return (
        <>
            {/*PC*/}
            <div className="hidden h-full w-full grow flex-col items-center justify-center space-y-20 md:flex">
                {new Array(2).fill(0).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row items-center justify-center space-x-20 lg:space-x-40">
                        {devTools.slice(rowIndex * 3, rowIndex * 3 + 3).map((tool, index) => (
                            <ToolCard key={index} {...tool} />
                        ))}
                    </div>
                ))}
            </div>
            {/*Mobile*/}
            <div className="flex h-full w-full grow flex-col items-center justify-center space-y-20 md:hidden">
                {new Array(3).fill(0).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row items-center justify-center space-x-2">
                        {devTools.slice(rowIndex * 2, rowIndex * 2 + 2).map((tool, index) => (
                            <ToolCard key={index} {...tool} />
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
