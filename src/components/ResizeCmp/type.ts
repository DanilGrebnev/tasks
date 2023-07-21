import { HTMLAttributes, ReactHTML } from 'react'

export interface IResizeCmp extends HTMLAttributes<HTMLDivElement> {
    color?: 'red' | 'green' | 'yellow' | 'silver'
}
