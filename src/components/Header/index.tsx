'use client'
import { FC } from 'react'
import { ResizeCmp } from '@/components/ResizeCmp'
import { IHeader } from './type'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import s from './s.module.scss'
import cn from 'classnames'

const a = [
    { href: '/', text: 'Задача 1' },
    { href: '/task2', text: 'Задача 2' },
]

export const Header: FC<IHeader> = ({ className, ...props }) => {
    const pathName = usePathname()

    return (
        <ResizeCmp
            {...props}
            color='silver'
            className={cn(s.header, className)}
        >
            {a.map(({ href, text }) => (
                <Link
                    key={href}
                    href={href}
                    className={cn({ [s.active]: pathName === href })}
                >
                    {text}
                </Link>
            ))}
        </ResizeCmp>
    )
}
