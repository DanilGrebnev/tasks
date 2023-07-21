import { FC } from 'react'
import { ResizeCmp } from '@components/ResizeCmp'
import { HTMLDivAttributes } from '@/types/HTMLDivAttributes'

export const RedCmp: FC<Omit<HTMLDivAttributes, 'color'>> = props => {
    return (
        <ResizeCmp
            color='red'
            {...props}
        />
    )
}
