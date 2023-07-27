import { FC } from 'react'
import { ILayout } from '@/types/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Task 2',
    description: 'description task_2',
}

const FormLayout: FC<ILayout> = ({ children }) => {
    return <>{children}</>
}

export default FormLayout
