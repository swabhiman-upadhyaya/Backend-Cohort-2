import './index.css'

import React from 'react'

const App = () => {
  return (
    <div className='notes flex flex-row flex-wrap mt-1 px-4 '>

      <div className='text-red-400 m-1 flex items-center bg-gray-700 w-[19vw] max-w-[30vw] p-4 rounded-sm justify-between'>
        <p className='text-2xl'>Title</p>
        <p className='text-1xl'>Description</p>
      </div>
 
    </div>
  )
}

export default App