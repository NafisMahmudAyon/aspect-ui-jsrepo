'use client'
import { Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from '@/app/src/components/Dropdown'
import React from 'react'

const DropdownDemo = () => {
  return (
    <div>
      <Dropdown>
        <DropdownAction>
          Options <span className="ml-2">▼</span>
        </DropdownAction>
        <DropdownContent>
          <DropdownList>
            <DropdownItem onClick={() => console.log('Option 1 clicked')}>Option 1</DropdownItem>
            <DropdownItem onClick={() => console.log('Option 2 clicked')}>Option 2</DropdownItem>
            <DropdownItem onClick={() => console.log('Option 3 clicked')}>Option 3</DropdownItem>
          </DropdownList>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}

export default DropdownDemo