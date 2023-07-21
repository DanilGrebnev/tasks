import { FC } from 'react'
import { IResizeCmp } from './type'

import cn from 'classnames'
import s from './s.module.scss'

export const ResizeCmp: FC<IResizeCmp> = ({
    id,
    style,
    children,
    className,
    color = 'silver',
}) => {
    return (
        <div
            id={id}
            style={style}
            className={cn(s[color], s['resize-cmp'], className)}
        >
            {children}
        </div>
    )
}
