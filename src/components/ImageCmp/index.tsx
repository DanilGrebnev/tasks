import { FC } from 'react'
import { IImageCmp } from './type'

import Image from 'next/image'
import img from '@public/image.jpg'

export const ImageCmp: FC<IImageCmp> = ({ className, style }) => (
    <Image
        placeholder='blur'
        className={className}
        style={style}
        alt='image'
        src={img}
        width={280}
        height={175}
    />
)
