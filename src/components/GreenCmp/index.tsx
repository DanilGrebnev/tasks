import { FC } from 'react'
import { ResizeCmp } from '../ResizeCmp'
import { HTMLDivAttributes } from '@/types/HTMLDivAttributes'

export const GreenCmp: FC<Omit<HTMLDivAttributes, 'color'>> = props => {
    return (
        <ResizeCmp
            {...props}
            color='green'
        />
    )
}
