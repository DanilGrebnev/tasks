import { ResizeCmp } from '@/components/ResizeCmp'
import { IYellow } from './type'
import { FC } from 'react'
import { ImageCmp } from '@components/ImageCmp'
import { Text } from '@components/Text'

import cn from 'classnames'
import s from './s.module.scss'

export const YellowCmp: FC<IYellow> = ({ className }, ...props) => {
    return (
        <ResizeCmp
            {...props}
            color='yellow'
            className={cn(s.yellow, className)}
        >
            <ImageCmp className={s.img} />
            <Text />
        </ResizeCmp>
    )
}
