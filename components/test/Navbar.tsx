import {
  Navbar,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem
} from '@/app/src/components/Navbar'
import React from 'react'

const NavbarDemo = () => {
  return (
    <div>
      <Navbar>
        <NavbarContainer>
          <div className='flex items-center'>
            <h1 className='text-xl font-bold'>Logo</h1>
          </div>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>
              <a href='#home'>Home</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#about'>About</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#contact'>Contact</a>
            </NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </div>
  )
}

export default NavbarDemo
