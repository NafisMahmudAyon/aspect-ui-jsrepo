import { Input } from '@/app/src/components/Input'
import React from 'react'

const InputDemo = () => {
  return (
    <div>
      <form>
        <Input
          label='Username'
          type='text'
          placeholder='Enter your username'
          icon={<span className='text-gray-400'>asd</span>}
        />
        <Input
          label='Email'
          type='email'
          placeholder='Enter your email'
          icon={<span className='text-gray-400'>asd</span>}
          iconPosition='right'
        />
        <Input
          label='Password'
          type='password'
          placeholder='Enter your password'
          icon={<span className='text-gray-400'>asd</span>}
          error='Password must be at least 8 characters long'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputDemo
