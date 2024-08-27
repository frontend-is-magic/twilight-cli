import { Tag } from 'antd'
import { CopyOutlined } from '@ant-design/icons'

export default function CopyableCode({ code }: { code: string }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(code).then()
    }

    return (
        <Tag className="mx-0 my-1 border-black bg-slate-50 px-2 py-1 text-xs text-black">
            {code}
            <CopyOutlined onClick={handleCopy} className="ml-2" />
        </Tag>
    )
}
