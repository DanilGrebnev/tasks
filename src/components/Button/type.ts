import { ButtonHTMLAttributes, HTMLProps } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType: 'transparent' | 'full'
}
