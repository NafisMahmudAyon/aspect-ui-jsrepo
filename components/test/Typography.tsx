import { Typography } from '@/app/src/components/Typography'
import React from 'react'

const TypographyDemo = () => {
  return (
    <div>
      <Typography variant="display">This is a heading 1</Typography>
      <Typography variant="display2">This is a heading 1</Typography>
      <Typography variant="h2">This is a heading 2</Typography>
      <Typography variant="body1">This is body text</Typography>
      <Typography variant="caption" className="text-gray-500">This is a caption</Typography>
    </div>
  )
}

export default TypographyDemo