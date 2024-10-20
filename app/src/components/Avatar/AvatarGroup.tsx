'use client'

import React from 'react'
import { Avatar } from './Avatar'
import { cn } from '../../utils/cn'

interface AvatarGroupProps {
  className?: string
  children?: React.ReactNode
  variant?: number
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  className = '',
  children,
  variant,
  ...rest
}) => {
  // const [variantValue, setVariantValue] = useState({
  //   className: "",
  // });

  // useEffect(() => {
  //   if (variant == 1) {
  //     setVariantValue({
  //       className: " ",
  //     });
  //   } else if (variant == 2 || variant == 3 || variant == 4 || variant == 5 || variant == 6) {
  //     setVariantValue({
  //       className: "-space-x-2 ",
  //     });
  //   }
  // }, [variant]);

  return (
    <div className={cn('flex items-center -space-x-2', className)} {...rest}>
      {!children ? (
        <>
          <Avatar />
          <Avatar />
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  )
}
