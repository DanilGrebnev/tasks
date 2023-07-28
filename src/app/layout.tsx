import { FC } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { ILayout } from '@/types/layout'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Task 1',
    description: 'description',
}

const RootLayout: FC<ILayout> = ({ children }) => {
    return (
        <html lang='en'>
            <body className={roboto.className}>
                <div id='modal'></div>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
