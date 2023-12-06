import React from 'react'
import NoProject from "../assets/no-projects.png"
import Button from './Button'

const NoProjectSelected = ({handleStartProject}) => {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={NoProject} className='w-16 h-16 mx-auto object-contain' alt=''/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select project or get started with new Project</p>
        <p className='mt-8'>
            <Button onClick={handleStartProject} >Create new Project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelected