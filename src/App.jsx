import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import AnaSayfa from "./pages/Anasayfa"
import Sepet from "./pages/Sepet"
import Favoriler from "./pages/Favoriler"
import Profil from "./pages/Profil"

function cikisYap() {
  setSepet([])
  setFavoriler([])
}

function App() {
  const [sepet, setSepet] = useState([])
  const [favoriler, setFavoriler] = useState([])
  const [arama, setArama] = useState("")


  return (
    <Routes>
      <Route
        element={
          <Layout sepet={sepet} />
        }
      >
        <Route
          
          path="/"
          element={
            <AnaSayfa
              sepet={sepet}
              setSepet={setSepet}
              favoriler={favoriler}
              setFavoriler={setFavoriler}
              arama={arama}
            />
          }
        />
        
       

        <Route
          path="/sepet"
          element={<Sepet sepet={sepet} setSepet={setSepet} />}
        />

        <Route
          path="/favoriler"
          element={
            <Favoriler
              favoriler={favoriler}
              setFavoriler={setFavoriler}
            />
          }
        />

        <Route 
    
     path="/profil"
     element={
      <Profil
        sepet={sepet}
        favoriler={favoriler}
        cikisYap={cikisYap}
      />
    
  } />
      </Route>
    </Routes>
  )
}

export default App
