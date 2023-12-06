import React from 'react'

const SelectProject = ({project,handleDelete}) => {
    const formateDate= new Date(project.dueDate).toLocaleDateString("en-us",{
        year:"numeric",
        month:"short",
        date:"numeric"
    })
  return (
    <div className='w-[35rem] mt-16'>
    <header className='pb-4 mb-4 border-b-2 border-stone-300'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-stone-300 mb-2'>{project.title}</h1>
            <button onClick={handleDelete} className='text-stone-600 hover:text-stone-950'>Delete</button>
        </div>
        <p className='mb-4 text-stone-400'>{formateDate}</p>
        <p className='text-stone-600'>{project.description}</p>
    </header>
    </div>
  )
}

export default SelectProject