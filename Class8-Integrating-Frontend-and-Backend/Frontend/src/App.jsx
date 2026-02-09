import './index.css'
import axios from 'axios'

import React, { useState } from 'react'

const App = () => {

  const [notes, setNotes] = useState([])

  axios.get("http://localhost:3000/notes")
    .then((res) => {
      console.log(res.data.note)
      setNotes(res.data.note)
    })

  return (
    <div className='notes flex flex-row flex-wrap mt-1 px-4'>
      {
        notes.map((elem, index) => {
          return (
            <div className='text-red-400 m-1 flex items-center flex-col bg-gray-700 p-4 rounded-sm' key={index}>
              <p className='text-2xl'>Title: {elem.title}</p>
              <p className='text-xl'>Age: {elem.age}</p>
              <p className='text-xl'>{elem.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App