import { useEffect } from 'react'

interface IUseTogglePlaceholder {
    inputId: string
    placeholderId: string
    value: string | number | readonly string[] | undefined
}

export const useTogglePlaceholder = ({
    inputId,
    placeholderId,
    value,
}: IUseTogglePlaceholder) => {
    useEffect(() => {
        const input = document.getElementById(inputId)
        const placeholder = document.getElementById(placeholderId)

        if (!placeholder) return
        if (!input) return

        placeholder.onclick = () => input.focus()
    }, [value])
}
