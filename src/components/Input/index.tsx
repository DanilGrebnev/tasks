import React, { forwardRef, useId } from 'react'
import { IINput } from './type'
import s from './s.module.scss'
import cn from 'classnames'

export const Input = React.memo(
    forwardRef<HTMLInputElement, IINput>(
        (
            { className, header, required, name, id, type = 'text', ...props },
            ref
        ) => {
            const idd = useId()

            return (
                <div className={cn(s.wrapper, className)}>
                    <label htmlFor={idd}>
                        <h4>{header}</h4>
                    </label>
                    <input
                        id={cn(idd, id)}
                        {...props}
                        ref={ref}
                        name={name}
                        type={type}
                        required={required}
                    />
                </div>
            )
        }
    )
)

Input.displayName = 'Input'
