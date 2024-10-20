'use client'

import React from 'react'
import { Avatar as Icon } from '../Icon/Avatar'
import { cn } from '../../utils/cn'

interface AvatarImageProps {
  className?: string
  name?: string
  src?: string
  altText?: string
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  className = '',
  name,
  src,
  altText,
  ...rest
}) => {
  let nameX: string | undefined

  if (name !== undefined) {
    if (name.split(' ').length > 1) {
      nameX = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    } else {
      nameX = `${name[0]}`
    }
  }

  // const [variantValue, setVariantValue] = useState({
  //   styles: "",
  //   imageStyles: "",
  // });

  // useEffect(() => {
  //   if (variant == 1) {
  //     setVariantValue({
  //       styles: "bg-gray-500 w-16 h-16 text-[1.25rem] leading-none",
  //       imageStyles: "object-cover text-transparent text-center rounded-full",
  //     });
  //   } else if (variant == 2) {
  //     setVariantValue({
  //       styles: "bg-yellow-600 w-16 h-16 text-[1.25rem] leading-none border border-white",
  //       imageStyles: "object-cover text-transparent text-center rounded-full",
  //     });
  //   } else if (variant == 3) {
  //     setVariantValue({
  //       styles: "bg-green-600 w-16 h-16 text-[1.25rem] rounded-md leading-none border border-white",
  //       imageStyles: "object-cover text-transparent text-center ",
  //     });
  //   } else if (variant == 4) {
  //     setVariantValue({
  //       styles: "bg-gray-500 w-16 h-16 text-[1.25rem] rounded-md leading-none border border-white",
  //       imageStyles: "object-cover text-transparent text-center rounded-md",
  //     });
  //   } else if (variant == 5) {
  //     setVariantValue({
  //       styles: "bg-gray-500 w-20 h-20 text-[1.25rem] leading-none outline-2 outline-offset-2 outline-yellow-600 outline overflow-visible ",
  //       imageStyles: "object-cover text-transparent text-center rounded-full w-full border-2 border-yellow-600  ",
  //     });
  //   } else if (variant == 6) {
  //     setVariantValue({
  //       styles: " w-20 h-20 text-[1.25rem] leading-none outline-4 outline-offset-[3px] outline-green-600 outline overflow-visible bg-gray-500",
  //       imageStyles: "object-cover text-transparent text-center rounded-full w-full   ",
  //     });
  //   }
  // }, [variant]);

  if (src) {
    return (
      <img
        src={src}
        alt={altText || 'alt text'}
        {...(name && { title: name })}
        className={cn(
          'aspect-square h-auto max-w-full overflow-hidden rounded-full object-cover',
          className
        )}
        {...rest}
      />
    )
  }
  if (!src && name) {
    return (
      <span className={className} title={name} {...rest}>
        {nameX || 'A'}
      </span>
    )
  }
  return (
    <>
      <Icon />
    </>
  )
}
