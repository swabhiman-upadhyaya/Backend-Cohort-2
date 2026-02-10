import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [note, setNotes] = useState([])

  function fetchNotes() {
    axios.get("https://backend-cohort-2-j428.onrender.com/notes/")
      .then((res) => {
        setNotes(res.data.note)
      })
  }
  useEffect(() => {
    fetchNotes();
  }, []
  )

  function submitHandeler(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;
    console.log(title.value, description.value)
    
    axios.post("https://backend-cohort-2-j428.onrender.com/notes", {
      title: title.value,
      description: description.value
    })
    .then((res) => {
      console.log(res.data)
      
      fetchNotes();
    })
  }

  function deleteNote(noteId) {
    axios.delete("https://backend-cohort-2-j428.onrender.com/notes/"+noteId)
    .then(() => {
      console.log(noteId)
      fetchNotes();
    })
  }

  return (

    <section className='all'>

      <form onSubmit={submitHandeler}>
        <div className="inputs">
          <input type="text" placeholder='Enter title' id='title-input' name='title' required/>
          <input type="text" placeholder='Enter description' id='title-desc' name='description' required/>
        </div>
        <div className="button">
          <button>Create Note</button>
        </div>
      </form>

      <div className='allNotes'>
        {
          note.map((elem, idx) => {
            return (
              <div className="note-wrapper" key={idx}>
                <p className="title">{elem.title}</p>
                <p className="desc">{elem.description}</p>

                <button className='remove' onClick={() => {
                  deleteNote(elem._id)
                }}>remove</button>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default App