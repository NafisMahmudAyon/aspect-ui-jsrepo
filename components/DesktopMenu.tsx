import { NavbarList } from '@/app/src'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import Image from 'next/image'
import AspectLogo from '../public/SVG/aspectLogo.svg'
import AspectDarkLogo from '../public/SVG/aspectDarkLogo.svg'

const DesktopMenu = () => {
  return (
    <>
      <Link href="/" className="flex">
        <Image src={AspectLogo} alt="Keep React" width="130" height="53" className="block dark:hidden" />
        <Image src={AspectDarkLogo} alt="Keep React" width="130" height="53" className="hidden dark:block" />
      </Link>
      <NavbarList>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Documentation</li>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Variations</li>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Template</li>
        <li className='hover:text-primary-900 dark:hover:text-primary-50'>Full Page</li>
      </NavbarList>
      <NavbarList>
        <ThemeSwitcher />
      </NavbarList>
    </>
  )
}

export default DesktopMenu