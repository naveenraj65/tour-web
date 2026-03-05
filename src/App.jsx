import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import TravelBlog from "./pages/TravelBlog";
import TravelGuides from "./pages/TravelGuides";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contect";

import Careers from "./pages/Careers";
import TripDetails from "./pages/TripDetails";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import HelpCenter from "./pages/HelpCenter";
import CancellationPolicy from "./pages/CancellationPolicy";

function App(){
  return(
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
         
         <Route path= '/TravelBlog' element={<TravelBlog/>}/>
         <Route path = '/TravelGuides' element={<TravelGuides/>}/>
         <Route path = '/FAQ' element={<FAQ/>}/>
         <Route path = '/contect' element={<Contact/>}/>
        
         <Route path = '/Careers' element={<Careers/>} />
         <Route path="/trip/:destination" element={<TripDetails />} />
         <Route path="/booking/:destination" element={<BookingPage />} />
         <Route path="/payment" element={<PaymentPage />} />
         <Route path="/help" element={<HelpCenter />} />
         <Route path="/cancellation-policy" element={<CancellationPolicy />} />

      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App;