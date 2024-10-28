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
          <NavbarCollapse position="left">
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
          <div className='flex items-center'>
            <h1 className='text-xl font-bold'>Logo</h1>
          </div>
          <NavbarCollapse position="right">
            <NavbarItem>
              <a href='#services'>Services</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#products'>Products</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#blog'>Blog</a>
            </NavbarItem>
          </NavbarCollapse>
          <NavbarCollapseBtn />
        </NavbarContainer>
      </Navbar>

    </div>
  )
}

export default NavbarDemo
