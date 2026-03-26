import { useState } from "react";
import { useEffect } from "react";

function App() {
  const api_key = import.meta.env.VITE_API_KEY
  const link_api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}d&query=ritorno+al+futuro`
  const [film, setFilm] = useState([])
console.log(import.meta.env.VITE_API_KEY);

useEffect(() =>{
  fetch(link_api)
  .then(res => res.json())
  .then(data => {
    setFilm(data.results)
  })
})

console.log(film)



  return (
    <>
    <form>
      <input type="text"></input>
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
