import React from 'react'

// import "../../../css/output.css"

interface ImageProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  text: string
}

export const Image: React.FC<ImageProps> = ({ text = 'Hello' }) => {
  return <div>{text}</div>
}
