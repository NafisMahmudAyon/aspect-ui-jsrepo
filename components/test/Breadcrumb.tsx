import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@/app/src/components/Breadcrumb'
const BreadcrumbDemo = () => {
  return (
    <div>
      <Breadcrumb separator={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.00354 5.99561L15.0038 11.9959L9 17.9996" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbDemo
