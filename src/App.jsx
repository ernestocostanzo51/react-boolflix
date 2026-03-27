import { useState } from "react";
import { useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Layout from './layout/layout'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
return(
<BrowserRouter>
<Routes>
  <Route element={<Layout/>}>
  
  </Route>
</Routes>
</BrowserRouter>
)
    
  
}

export default App
