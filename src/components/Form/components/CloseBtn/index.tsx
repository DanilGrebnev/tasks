import { FC, ReactElement } from 'react'
import s from './s.module.scss'

interface ICloseBtn {
    closeForm: () => void
    children?: ReactElement
}

export const CloseBtn: FC<ICloseBtn> = ({ closeForm, children }) => {
    return (
        <div
            className={s.closeBtn}
            onClick={closeForm}
        >
            &times;
        </div>
    )
}
