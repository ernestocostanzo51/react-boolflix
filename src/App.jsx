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
          <div key={item.id} className="card">
            <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}/>
            <p>Titolo: {item.title}</p>
            <p>Titolo Reale:{item.original_title}</p>
            <p>Lingua:<span className={`fi fi-${item.original_language === 'en' ? 'us' : item.original_language}`}></span>
            <span style={{ marginLeft: '10px' }}>({item.original_language})</span>
           </p>
            <p>{(item.vote_average/2).toFixed(1)}
              {(item.vote_average/2).toFixed(1) > 0 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 1 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 2 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 3 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 4 && <span style={{ color: "gold" }}>★</span>}
              </p>
          </div>
        ))


      }
      <h1>SERIE</h1>
      {
        serie.map((item) =>(
          <div key={item.id} className="card">
             <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}/>
            <p>Titolo: {item.name}</p>
             <p>Titolo Reale:{item.original_name}</p>
            <p>Lingua:<span className={`fi fi-${item.original_language === 'en' ? 'us' : item.original_language}`}></span>
            <span style={{ marginLeft: '10px' }}>({item.original_language})</span>
            </p>
            <p>Voto: {(item.vote_average/2).toFixed(1)}
              {(item.vote_average/2).toFixed(1) > 0 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 1 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 2 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 3 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 4 && <span style={{ color: "gold" }}>★</span>}
            </p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
