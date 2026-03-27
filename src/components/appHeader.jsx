import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; 

export default function AppHeader({ setFilm, setSerie, api_key }) {
  const [ricerca, setRicerca] = useState("");

  function Ricerca(e) {
    e.preventDefault();
    

    // RICERCA FILM
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${ricerca.trim()}`)
      .then((res) => res.json())
      .then((data) => setFilm(data.results));

    // RICERCA SERIE
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${ricerca.trim()}`)
      .then((res) => res.json())
      .then((data) => setSerie(data.results));
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark"> 
      <div className="container-fluid">
        <Link className="navbar-brand text-danger fw-bold" to="/">BoolFlix</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/film">Film</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/serie">Serie</NavLink>
            </li>
          </ul>

         
          <form className="d-flex" role="search" onSubmit={Ricerca}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Cerca un film o una serie" 
              value={ricerca}
              onChange={(e) => setRicerca(e.target.value)}
            />
            <button className="btn btn-outline-danger" type="submit">Cerca</button>
          </form>
        </div>
      </div>
    </nav>
  );
}