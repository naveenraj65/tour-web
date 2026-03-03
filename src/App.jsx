import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Paris from "./pages/Paris"
import TravelBlog from "./pages/TravelBlog";
import TravelGuides from "./pages/TravelGuides";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contect";
import Bali from "./pages/Bali";


function App(){
  return(
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/paris' element={<Paris/>}/>
         <Route path= '/TravelBlog' element={<TravelBlog/>}/>
         <Route path = '/TravelGuides' element={<TravelGuides/>}/>
         <Route path = '/FAQ' element={<FAQ/>}/>
         <Route path = '/Contect' element={<Contact/>}/>
         <Route path = '/Bali' element={<Bali/>}/>     
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App;