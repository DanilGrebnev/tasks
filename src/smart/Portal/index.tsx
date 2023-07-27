import { FC, ReactElement, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import s from './s.module.scss'

interface IPortal {
    children: ReactElement
}

export const Portal: FC<IPortal> = ({ children }) => {
    return (
        <>
            {createPortal(
                <div className={s.modal}>{children}</div>,
                document.getElementById('modal') as HTMLElement
            )}
        </>
    )
}
