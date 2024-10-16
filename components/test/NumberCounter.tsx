import { NumberCounter } from '@/app/src/components/NumberCounter'
import React from 'react'

const NumberCounterDemo = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Number Counter Examples</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Integer Counter (Immediate)</h2>
        <NumberCounter end={1000} duration={2000} />
      </div>

      <div className="mb-4 h-[100vh]">
        <h2 className="text-xl font-semibold">Float Counter (Immediate)</h2>
        <NumberCounter end={3.14159} duration={3000} decimals={2} />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Counter on Visible</h2>
        <NumberCounter end={500} duration={1500} onVisible={true} />
      </div>
    </div>
  )
}

export default NumberCounterDemo