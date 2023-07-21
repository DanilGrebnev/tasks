import { FC } from 'react'
import { ResizeCmp } from '@/components/ResizeCmp'
import { IFooter } from './type'

import cn from 'classnames'
import s from './s.module.scss'

export const Footer: FC<IFooter> = ({ className }, ...props) => {
    return (
        <ResizeCmp
            {...props}
            className={cn(s.footer, className)}
            color='silver'
        >
            <div>Footer</div>
        </ResizeCmp>
    )
}
