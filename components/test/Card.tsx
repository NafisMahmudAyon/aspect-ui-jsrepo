import { Button } from '@/app/src/components/Button'
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/app/src/components/Card'
import React from 'react'

const CardDemo = () => {
  return (
    <div>
      <Card className='relative w-[350px]'>
        <a href='https://nafisbd.com' className='absolute inset-0 z-10' />
        <CardHeader className=''>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent className=' '>
          {/* Add your content here */}jghj
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            variant='outline'
            className='relative z-20 text-buttonTextColor-dark'
          >
            Cancel
          </Button>
          <Button className='relative z-20 bg-buttonBGColor text-buttonTextColor-light hover:bg-buttonBGColor-hover'>
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardDemo
