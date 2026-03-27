
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Layout from './layout/layout'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import { useState } from "react";

function App() {
  const [film, setFilm] = useState([]);
  const [serie, setSerie] = useState([]);
  
  
  const api_key = import.meta.env.VITE_API_KEY;
return(
<BrowserRouter>
      <Routes>
        <Route element={
          <Layout 
            setFilm={setFilm} 
            setSerie={setSerie} 
            api_key={api_key} 
          />
        }>
          <Route path="/" element={
            <HomePage 
              film={film} 
              setFilm={setFilm} 
              serie={serie} 
              setSerie={setSerie} 
              api_key={api_key}
            />
          }/>
          
        </Route>
      </Routes>
    </BrowserRouter>
)
    
  
}

export default App
