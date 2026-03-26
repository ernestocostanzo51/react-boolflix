import { useState } from "react";
import { useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
function App() {
  const api_key = import.meta.env.VITE_API_KEY
  

  const [film, setFilm] = useState([])
  const [serie, setSerie] = useState([])
  const [ricerca, setRicerca] = useState("")


useEffect(() => {
  //film caricati di default
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=ritorno+al+futuro`)
    .then(res => res.json())
    .then(data => setFilm(data.results));

  //serie caricate di default
  fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=scrubs`)
    .then(res => res.json())
    .then(data => setSerie(data.results)); 
}, []);


//film e serie caricati con la ricerca(dopo l'invio del form)
function Ricerca(e){
e.preventDefault()

//RICERCA FILM
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${ricerca}`)
      .then((res) => res.json())
      .then((data) => {
        setFilm(data.results);
      })
//RICERCA SERIE
      fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${ricerca}`)
      .then((res) => res.json())
      .then((data) => {
        setSerie(data.results);
      })
  }
  
  return (
    <>
    <form onSubmit={Ricerca}>
      <input type="text" value={ricerca} onChange={(e => setRicerca(e.target.value))}></input>
      <button>Ricerca</button>
    </form>

    <div>
      <h1>FILM</h1>
      {
        film.map((item) =>(
          <div key={item.id}>
            <p>Titolo: {item.title}</p>
            <p>Titolo Reale:{item.original_title}</p>
            <p>Lingua:<span className={`fi fi-${item.original_language === 'en' ? 'us' : item.original_language}`}></span>
            <span style={{ marginLeft: '10px' }}>({item.original_language})</span>
           </p>
            <p>Voto: {item.vote_average}</p>
          </div>
        ))


      }
      <h1>SERIE</h1>
      {
        serie.map((item) =>(
          <div key={item.id}>
            <p>Titolo: {item.name}</p>
             <p>Titolo Reale:{item.original_name}</p>
            <p>Lingua:<span className={`fi fi-${item.original_language === 'en' ? 'us' : item.original_language}`}></span>
            <span style={{ marginLeft: '10px' }}>({item.original_language})</span>
            </p>
            <p>Voto: {item.vote_average}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
