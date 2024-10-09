'use client'

import { Toggle } from '@/app/src/components/ToggleButton'
import { ToggleButton } from '@/app/src/components/ToggleButton'
import { ToggleButtonGroup } from '@/app/src/components/ToggleButton'
import React from 'react'

const ToggleButtonDemo = () => {
  const handleSingleChange = (value: string | string[]) => {
    console.log('Single selection:', value);
  };
  const handleChange = (value: string, selected: boolean) => {
    console.log(`Button ${value} is now ${selected ? 'selected' : 'unselected'}`);
  };
  const handleMultipleChange = (value: string | string[]) => {
    console.log('Multiple selection:', value);
  };
  return (
    <div><h1 className="text-3xl font-bold mb-4">Toggle Button Examples</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Single Selection Group</h2>
      <ToggleButtonGroup type="single" onChange={handleSingleChange}>
        <ToggleButton value="option1">Option 1</ToggleButton>
        <ToggleButton value="option2">Option 2</ToggleButton>
        <ToggleButton value="option3">Option 3</ToggleButton>
      </ToggleButtonGroup>

      <h2 className="text-xl font-semibold mt-6 mb-2">Multiple Selection Group</h2>
      <ToggleButtonGroup type="multiple" onChange={handleMultipleChange}>
        <ToggleButton value="option1">Option 1</ToggleButton>
        <ToggleButton value="option2">Option 2</ToggleButton>
        <ToggleButton value="option3">Option 3</ToggleButton>
      </ToggleButtonGroup>
      <Toggle value="option1" onChange={handleChange}>
        Option 1
      </Toggle>
      <Toggle value="option2" onChange={handleChange}>
        Option 2
      </Toggle>
      <Toggle value="option3" onChange={handleChange}>
        Option 3
      </Toggle>
    </div>
  )
}

export default ToggleButtonDemo