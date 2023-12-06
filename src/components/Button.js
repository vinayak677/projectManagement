import React from 'react'

const Button = ({children,...props}) => {
  return (
    <button className="px-4 text-xs md:text-base py-2 bg-slate-700 rounded-md text-slate-400 hover:bg-slate-600 hover:text-slate-100" {...props}>{children}</button>
  )
}

export default Button