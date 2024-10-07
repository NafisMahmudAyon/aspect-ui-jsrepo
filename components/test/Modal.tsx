import { Modal, ModalAction, ModalContent } from '@/app/src/components/Modal'
import React from 'react'

const ModalDemo = () => {
  return (
    <div>
      <Modal>
      <ModalAction>
        Open Modal
      </ModalAction>
      <ModalContent>
        <h2 className="text-2xl font-bold mb-2">Modal Title</h2>
        <p className="mb-4">This is the modal content.</p>
        <ModalAction>Close</ModalAction>
      </ModalContent>
    </Modal></div>
  )
}

export default ModalDemo