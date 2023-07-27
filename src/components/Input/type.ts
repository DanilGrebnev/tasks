import { HTMLProps, HTMLInputTypeAttribute } from 'react'

export interface IINput extends HTMLProps<HTMLInputElement> {
    name: string
    header?: string
    type?: HTMLInputTypeAttribute
    required?: boolean
}
