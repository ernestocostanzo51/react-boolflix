import AppHeader from "../components/appHeader"
import { Outlet } from "react-router-dom"
export default function Layout(){
    return(
        <>
<AppHeader
setFilm={setFilm} 
setSerie={setSerie} 
api_key={api_key}/>
<main>
<Outlet/>
</main>
<footer>

</footer>

        </>





    )
}