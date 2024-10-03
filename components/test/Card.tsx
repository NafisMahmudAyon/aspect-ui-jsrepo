import { Button } from '@/app/src/components/Button'
import { Card, CardFooter, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/src/components/Card'
import React from 'react'

const CardDemo = () => {
  return (
    <div>
      {/* <a href="https://nafisbd.com" className=''> */}
      <Card className="w-[350px] relative">
      <a href="https://nafisbd.com" className='absolute inset-0 z-0 cursor-pointer pointer-events-none' />
      <CardHeader className='relative'>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent className='relative'>
        {/* Add your content here */}jghj
      </CardContent>
      <CardFooter className="flex justify-between relative z-10">
        <Button variant="outline" className="text-buttonTextColor-dark">Cancel</Button>
        <Button className="bg-buttonBGColor hover:bg-buttonBGColor-hover text-buttonTextColor-light">Deploy</Button>
      </CardFooter>
    </Card>
    {/* </a> */}
      <a href="#" className=''>gfgdfgdf</a>
    </div>
  )
}

export default CardDemo