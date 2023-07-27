import React, { forwardRef, useEffect, useId, useRef } from 'react'
import { IINput } from './type'
import { useTogglePlaceholder } from './hooks/useTogglePlaceholder'
import s from './s.module.scss'
import cn from 'classnames'

export const Input = React.memo(
    forwardRef<HTMLInputElement, IINput>(
        (
            {
                className,
                header,
                name,
                id,
                value,
                Placeholder,
                type = 'text',
                ...props
            },
            ref
        ) => {
            const inputId = useId()
            const placeholderId = useId()

            useTogglePlaceholder({ inputId, placeholderId, value })

            return (
                <div className={cn(s.wrapper, className)}>
                    <label htmlFor={inputId}>
                        <h4>{header}</h4>
                    </label>
                    <div className={s.placeholderWrapper}>
                        <input
                            id={cn(inputId, id)}
                            ref={ref}
                            value={value}
                            name={name}
                            type={type}
                            {...props}
                        />
                        {Placeholder && !value && (
                            <div
                                id={placeholderId}
                                className={s.placeholder}
                            >
                                {Placeholder}
                            </div>
                        )}
                    </div>
                </div>
            )
        }
    )
)

Input.displayName = 'Input'
