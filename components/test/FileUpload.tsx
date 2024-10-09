'use client'

import React from 'react'
import { FileUpload } from '@/app/src/components/FileUpload'

const FileUploadDemo = () => {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
    // Here you can implement your file upload logic
    // For example, you might want to send the file to a server using an API call
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">File Upload Example</h1>
      <FileUpload
        onFileSelect={handleFileSelect}
        accept="image/*"
        multiple={true}
      />
    </div>
  )
}

export default FileUploadDemo