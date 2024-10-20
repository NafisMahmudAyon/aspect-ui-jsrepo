'use client'

import { Switch } from '@/app/src/components/Switch'
import React, { useState } from 'react'

const SwitchDemo = () => {
  const [isSwitched, setIsSwitched] = useState(false)

  const handleSwitchChange = (checked: boolean) => {
    setIsSwitched(checked)
  }
  return (
    <div>
      <h1 className='mb-4 text-3xl font-bold'>Switch Example</h1>

      <Switch
        checked={isSwitched}
        onChange={handleSwitchChange}
        label='Enable feature'
      />
      <p className='mt-4'>
        Feature is currently {isSwitched ? 'enabled' : 'disabled'}.
      </p>
    </div>
  )
}

export default SwitchDemo
