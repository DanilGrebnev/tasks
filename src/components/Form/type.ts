import { ChangeEvent } from 'react'

export type TChangeEvent = ChangeEvent<HTMLInputElement>

export type onChangeFN = (e: TChangeEvent) => void

export interface IINput<T> {
    value: string
    name: T
}

export interface IForm {
    toggleModal?: (value: boolean) => void
}
