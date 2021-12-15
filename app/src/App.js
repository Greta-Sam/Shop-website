import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Pradzia from "./pages/Pradzia.jsx"
import Galerija from "./pages/Galerija.jsx"
import GalerijaPapuosalai from "./pages/GalerijaPapuosalai.jsx"
import GalerijaInterjeroDetales from "./pages/GalerijaInterjeroDetales.jsx"
import InterjeroDetales from "./pages/InterjeroDetales.jsx"
import Papuosalai from "./pages/Papuosalai.jsx"
import Kontaktai from "./pages/Kontaktai.jsx"
import Medis from "./pages/Medis.jsx"
import Apyrankes from "./pages/Apyrankes.jsx"
import Pakabukai from "./pages/Pakabukai.jsx"
import Rinkiniai from "./pages/Rinkiniai.jsx"
import Rinkinys from "./pages/Rinkinys.jsx"
import Pakabukas from "./pages/Pakabukas.jsx"
import Apyranke from "./pages/Apyranke.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

function App() {
  return (
   <div className="app">
     <Router>
     <div className="app-header"><Header /></div>
     <Routes>
       <Route path="/" element={<Pradzia />}/>
       <Route path="/galerija" element={<Galerija />}/>
       <Route path="/galerija/papuosalai" element={<GalerijaPapuosalai />}/>
       <Route path="/galerija/interjerodetales" element={<GalerijaInterjeroDetales />}/>
       <Route path="/interjerodetales" element={<InterjeroDetales />}/>
       <Route path='/interjerodetales/:id' element={<Medis />}/>
       <Route path="/papuosalai" element={<Papuosalai />}/>
       <Route path="/papuosalai/apyrankes" element={<Apyrankes />}/>
       <Route path="/papuosalai/apyrankes/:id" element={<Apyranke />}/>
       <Route path="/papuosalai/pakabukai" element={<Pakabukai />}/>
       <Route path="/papuosalai/pakabukai/:id" element={<Pakabukas />}/>
       <Route path="/papuosalai/rinkiniai" element={<Rinkiniai />}/>
       <Route path="/papuosalai/rinkiniai/:id" element={<Rinkinys />}/>

       <Route path="/kontaktai" element={<Kontaktai />}/>
     </Routes>
     <div className="app-footer"><Footer /></div>
   </Router>
   </div>
      
  );
}

export default App;
