import { FC } from 'react'
import { IButton } from './type'
import cn from 'classnames'

import s from './s.module.scss'

export const Button: FC<IButton> = ({
    children,
    className,
    btnType,
    ...props
}) => {
    return (
        <button
            className={cn(s[btnType], s.button, className)}
            {...props}
        >
            {children}
        </button>
    )
}
