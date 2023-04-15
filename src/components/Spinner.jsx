import React from 'react'
import  "./Spinner.css"

export default function Spinner() {
  return (
     <div className='flex flex-col items-center '>
      <div className='spinner'></div>
      <p className='text-bgDark text-lg font-semibold py-4'>Loading...</p>
    </div>
  )
}
