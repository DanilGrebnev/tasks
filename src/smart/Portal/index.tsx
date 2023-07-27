import { FC, ReactElement, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface IPortal {
    children: ReactElement
}

export const Portal: FC<IPortal> = ({ children }) => {
    return (
        <>
            {createPortal(
                children,
                document.getElementById('modal') as HTMLElement
            )}
        </>
    )
}
