import React from 'react'

function Button({children}) {
  return (
    <button className="bg-light text-white font-semibold py-1 px-3 rounded">
      {children}
    </button>
  )
}

export default Button
