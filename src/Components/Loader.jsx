import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[400px] w-full bg-[inherit] z-10">
        <div className="w-16 h-16 border-solid border-b-8 rounded-full animate-spin"></div>
        <div>Loading...</div>
    </div>

  )
}

export default Loader
