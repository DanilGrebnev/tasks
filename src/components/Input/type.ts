import { HTMLProps, HTMLInputTypeAttribute, CSSProperties } from 'react'

export interface IINput extends HTMLProps<HTMLInputElement> {
    name: string
    header?: string
    type?: HTMLInputTypeAttribute
    required?: boolean
    Placeholder?: string
    PlaceholderStyle?: CSSProperties
    upperCase?: boolean
}
