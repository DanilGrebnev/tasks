import { TCHangeInputEvent } from '@/types/TChangeInputEvent'
import { useCallback, useState, useEffect } from 'react'

type onChangeWithRegExp = (e: TCHangeInputEvent, RegExp?: RegExp) => void

type onChange = (e: TCHangeInputEvent) => void

/**
 * Валидириует поле по регулярному выражению
 */
export const useIsValidInput = (
    initialValue: string
): [string, onChangeWithRegExp] => {
    const [value, setValue] = useState(initialValue)

    const onChange = useCallback((e: TCHangeInputEvent, RegExp?: RegExp) => {
        const { value } = e.target

        if (RegExp) {
            if (value) {
                const lastChar = value.at(-1)

                const isValid = lastChar?.match(RegExp)

                if (!isValid) return
            }
        }

        setValue(value)
    }, [])

    return [value, onChange]
}

/**
 * Создаёт маску для ввода Гос. номера автомобиля
 */
export const useInputStateNumberWithMask = (
    initialValue: string
): [string, onChange] => {
    const [value, setValue] = useState(initialValue)

    const onChange = useCallback((e: TCHangeInputEvent) => {
        const { value } = e.target

        if (value) {
            if (value.length === 1 && !value[0].match(/\D/)) return
            if (value.length === 2 && !value[1].match(/\d/)) return
            if (value.length === 3 && !value[2].match(/\d/)) return
            if (value.length === 4 && !value[3].match(/\d/)) return
            if (value.length === 5 && !value[4].match(/\D/)) return
            if (value.length === 6 && !value[5].match(/\D/)) return
            if (value.length === 7 && !value[6].match(/\d/)) return
            if (value.length === 8 && !value[7].match(/\d/)) return
            if (value.length === 9 && !value[8].match(/\d/)) return
        }

        setValue(value.toUpperCase())
    }, [])

    return [value, onChange]
}

/**
 * Создаёт маску для ввода даты
 */
export const useInputDateWithMask = (
    initialValue: string
): [string, onChange] => {
    const [date, setDate] = useState(initialValue)

    const onChange = useCallback((e: TCHangeInputEvent) => {
        const { value } = e.target

        if (value) {
            if (!value.match(/^[\d\.]+$/)) return

            if (value.length === 2) {
                return setDate(value + '.')
            }
            if (value.length === 5) {
                return setDate(value + '.')
            }
        }

        setDate(value)
    }, [])

    return [date, onChange]
}
