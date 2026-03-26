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

    const link_ricerca = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${ricerca}`;

    fetch(link_ricerca)
      .then((res) => res.json())
      .then((data) => {
        setFilm(data.results);
      })
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
        film.map((item) =>(
          <div key={item.id}>
            <p>Titolo: {item.title}</p>
            <p>Titolo Reale:{item.original_title}</p>
            <p>Lingua:{item.original_language}</p>
            <p>Voto: {item.vote_average}</p>
          </div>
        ))


      }
    </div>
    </>
  )
}

export default App
