import { Avatar } from '@/app/src/components/Avatar'
import React from 'react'

const AvatarDemo = () => {
  return (
    <div>
      <div className="flex gap-4">
        <Avatar src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-manei-3211476.jpg&fm=jpg&w=640&h=640" altText="Avatar 1" styles="border" />
        <Avatar src="https://images.pexels.com/photos/3211477/pexels-photo-3211477.jpeg?cs=srgb&dl=pexels-manei-3211477.jpg&fm=jpg&w=640&h=640" altText="Avatar 2" styles="border" />
        <Avatar src="https://images.pexels.com/photos/3211479/pexels-photo-3211479.jpeg?cs=srgb&dl=pexels-manei-3211479.jpg&fm=jpg&w=640&h=640" altText="Avatar 3" styles="border" />
      </div>
    </div>
  )
}

export default AvatarDemo