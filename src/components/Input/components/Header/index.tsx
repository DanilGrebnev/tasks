import { FC } from 'react'

interface IHeader {
    header: string | undefined
    labelId?: string | undefined
}

export const Header: FC<IHeader> = ({ header, labelId }) => (
    <label htmlFor={labelId}>
        <h4>{header}</h4>
    </label>
)
