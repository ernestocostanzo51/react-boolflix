import { useState } from "react"
export default function AppHeader(){
    function Ricerca(e){
e.preventDefault()

//RICERCA FILM
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${ricerca.trim()}`)
      .then((res) => res.json())
      .then((data) => {
        setFilm(data.results);
      })
//RICERCA SERIE
      fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${ricerca.trim()}`)
      .then((res) => res.json())
      .then((data) => {
        setSerie(data.results);
      })
  }
    return(

        <header>
<div className="container">
      <div className="row">
        <div className="col">
       <form onSubmit={Ricerca}>
      <input type="text" value={ricerca} onChange={(e => setRicerca(e.target.value))}></input>
      <button>Ricerca</button>
    </form>
        </div>
      </div>
    </div>
  </header>
    )
}

