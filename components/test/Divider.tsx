import { Divider } from '@/app/src/components/Divider'
import React from 'react'

const DividerDemo = () => {
  return (
    <div className="p-4 space-y-4">
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size="2xl" />

      <Divider variant="start">Left Align</Divider>
      <Divider variant="center">Center Align</Divider>
      <Divider variant="end">Right Align</Divider>

      <Divider color="blue-500" size="lg">Custom Color</Divider>

      <div className="h-40 flex">
        <Divider orientation="vertical" size="md" />
      </div>
    </div>
  )
}

export default DividerDemo