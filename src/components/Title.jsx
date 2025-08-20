import React from 'react'

const Title = ({title , paragraph}) => {
  return (
    <div className='flex flex-col items-center justify-center my-4 text-center pt-16 gap-5'>
         <div className='text-3xl font-medium'>{title}</div>
         <div className='w-1/2 text-sm'>{paragraph}</div>
    </div>
  )
}

export default Title
