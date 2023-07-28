import { forwardRef, useId, memo } from 'react'
import { IINput } from './type'
import { useTogglePlaceholder } from './hooks/useTogglePlaceholder'
import { Header } from './components/Header'

import s from './s.module.scss'
import cn from 'classnames'

export const Input = memo(
    forwardRef<HTMLInputElement, IINput>(
        (
            {
                className,
                header,
                name,
                id,
                value,
                Placeholder,
                PlaceholderStyle,
                upperCase,
                type = 'text',
                ...props
            },
            ref
        ) => {
            const inputId = useId()
            const placeholderId = useId()

            useTogglePlaceholder({ inputId, placeholderId, value })

            const values = upperCase ? value?.toString().toUpperCase() : value

            return (
                <div className={cn(s.wrapper, className)}>
                    <Header
                        header={header}
                        labelId={inputId}
                    />
                    <div className={s.placeholderWrapper}>
                        <input
                            ref={ref}
                            id={cn(inputId, id)}
                            value={values}
                            name={name}
                            type={type}
                            {...props}
                        />

                        {Placeholder && !value && (
                            <span
                                id={placeholderId}
                                className={s.placeholder}
                                style={PlaceholderStyle}
                            >
                                {Placeholder}
                            </span>
                        )}
                    </div>
                </div>
            )
        }
    )
)

Input.displayName = 'Input'
