'use client'
import { Button } from '@/app/src/components/Button'
import React, { useState } from 'react'

const ButtonDemo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddTask = () => {
    setModalOpen(true);
  };
  return (
    <div>
      {/* Primary Button */}
      <Button variant="primary" onClick={() => alert('Primary Button Clicked')}>
        Primary Button
      </Button>

      {/* Secondary Button */}
      <Button variant="secondary" onClick={() => alert('Secondary Button Clicked')}>
        Secondary Button
      </Button>

      {/* Destructive Button */}
      <Button variant="destructive" onClick={() => alert('Destructive Button Clicked')}>
        Destructive Button
      </Button>

      {/* Link Button */}
      <Button variant="link" onClick={() => alert('Link Button Clicked')}>
        Link Button
      </Button>

      {/* Outline Button */}
      <Button variant="outline" onClick={() => alert('Outline Button Clicked')}>
        Outline Button
      </Button>

      {/* Ghost Button */}
      <Button variant="ghost" onClick={() => alert('Ghost Button Clicked')}>
        Ghost Button
      </Button>

      {/* Icon Button */}
      <Button variant="icon" icon={<span className="material-icons">star</span>} aria-label="Icon Button" />

      {/* Button with Icon (Icon on Left) */}
      <Button variant="withIcon" icon={<span className="material-icons">favorite</span>} iconPosition="left">
        With Icon Left
      </Button>

      {/* Button with Icon (Icon on Right) */}
      <Button variant="withIcon" icon={<span className="material-icons">send</span>} iconPosition="right">
        With Icon Right
      </Button>

      {/* Loading Button */}
      <Button variant="primary" loading>
        Loading...
      </Button>

      {/* Disabled Button */}
      <Button variant="primary" disabled>
        Disabled Button
      </Button>

      {/* Floating Action Button (FAB) */}
      <Button variant="primary" isFab icon={<span className="material-icons">add</span>} aria-label="FAB" />
    

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <input
              type="text"
              className="border w-full p-2 mb-4"
              placeholder="Task Name"
            />
            <textarea
              className="border w-full p-2 mb-4"
              placeholder="Task Description"
            ></textarea>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setModalOpen(false)}
            >
              Add Task
            </button>
          </div>

        </div>
      )}
      <h1 className='text-headingColor dark:text-headingColor-dark text-h1 text-base '>Hello lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur aliquam ipsam fugit, doloribus debitis iusto consequatur quidem sed consequuntur. Alias deleniti, corporis accusantium facere dicta nostrum non inventore voluptatibus.</h1>

    </div>
  )
}

export default ButtonDemo