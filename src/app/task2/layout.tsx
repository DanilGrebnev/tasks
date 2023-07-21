import { FC } from 'react'
import { ILayout } from '@/types/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'task_2',
    description: 'description task_2',
}

const FormLayout: FC<ILayout> = ({ children }) => {
    return <>{children}</>
}

export default FormLayout
