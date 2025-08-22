import React from 'react'

const Title = ({title , paragraph}) => {
  return (
    <div className='flex flex-col items-center justify-center my-4 text-center pt-16 gap-5'>
         <div className='text-3xl font-medium'>{title}</div>
         <div className='w-2/3 text-sm text-center'>{paragraph}</div>
    </div>
  )
}

export default Title
