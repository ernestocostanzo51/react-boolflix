import { useState } from "react";
import { useEffect } from "react";

function App() {
  const api_key = import.meta.env.VITE_API_KEY
  const link_api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=ritorno+al+futuro`

  const [film, setFilm] = useState([])
  const [ricerca, setRicerca] = useState("")


useEffect(() =>{
  fetch(link_api)
  .then(res => res.json())
  .then(data => {
    setFilm(data.results)
  })
}, [])

function RicercaFilm(e){
e.preventDefault()
}

console.log(film)


  return (
    <>
    <form onSubmit={RicercaFilm}>
      <input type="text" value={ricerca} onChange={(e => setRicerca(e.target.value))}></input>
      <button>Ricerca</button>
    </form>


    <div>
      {


      }
    </div>
    </>
  )
}

export default App
