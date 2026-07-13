import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {


  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("/api/data")
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
      })
  }, [])

  if (!user) {
    return <div>Use Data Loading...</div>
  }

  return (
    <div className="app">
      <h1>Name: {user.name}</h1>
      <p>ID: {user.id}</p>
      <p>Message: {user.message}</p>
    </div>
  )
}

export default App