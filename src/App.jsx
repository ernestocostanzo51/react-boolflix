import { useState } from "react";
import { useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Layout from './layout/layout'

function App() {
  const api_key = import.meta.env.VITE_API_KEY
  
  
  const [film, setFilm] = useState([])
  const [serie, setSerie] = useState([])
  


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


  return (
    <>
  

      <div className="container">
         <h1>FILM</h1>
        <div className="row">
         {
        film.map((item) =>(
          <div className="col-2"key={item.id}>
          <div  className="card">
            <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}/>
            <p>Titolo: {item.title}</p>
            <p>Titolo Reale:{item.original_title}</p>
            <p>Lingua:<span className={`fi fi-${item.original_language === 'en' ? 'us' : item.original_language}`}></span>
            <span style={{ marginLeft: '10px' }}>({item.original_language})</span>
           </p>
            <p>{(item.vote_average/2).toFixed(1)}

              {item.vote_average === 0 && <span> NO VALUE </span>}
              
              {(item.vote_average/2).toFixed(1) > 0 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 1 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 2 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 3 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 4 && <span style={{ color: "gold" }}>★</span>}
              </p>
          
    </div>
 </div>
        ))}
</div>
</div>

           <div className="container">
            <h1>SERIE</h1>
            <div className="row">
               {
          serie.map((item) =>(
          <div className="col-2"key={item.id}>
          <div  className="card">
            <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}/>
            <div className="card-info">
              <p>Titolo: {item.name}</p>
            <p>Titolo Reale:{item.original_name}</p>
            <p>Lingua:<span className={`fi fi-${item.original_language === 'en' ? 'us' : item.original_language}`}></span>
            <span style={{ marginLeft: '10px' }}>({item.original_language})</span>
           </p>
            <p>{(item.vote_average/2).toFixed(1)}

              {item.vote_average === 0 && <span> NO VALUE </span>}
              
              {(item.vote_average/2).toFixed(1) > 0 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 1 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 2 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 3 && <span style={{ color: "gold" }}>★</span>}
              {(item.vote_average/2).toFixed(1) > 4 && <span style={{ color: "gold" }}>★</span>}
              </p>
            </div>
    </div>
 </div>
        ))}
            </div>
           </div>
    </>
  )
}

export default App
