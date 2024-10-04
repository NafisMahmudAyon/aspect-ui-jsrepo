import { Button } from '@/app/src/components/Button'
import { Card, CardFooter, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/src/components/Card'
import React from 'react'

const CardDemo = () => {
  return (
    <div>
      <Card className="w-[350px] relative">
        <a href="https://nafisbd.com" className='absolute inset-0 z-10' />
        <CardHeader className=''>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent className=' '>
          {/* Add your content here */}jghj
        </CardContent>
        <CardFooter className="flex justify-between ">
          <Button variant="outline" className="text-buttonTextColor-dark relative z-20">Cancel</Button>
          <Button className="bg-buttonBGColor hover:bg-buttonBGColor-hover text-buttonTextColor-light relative z-20">Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardDemo