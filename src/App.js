//import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Navigation from './Component/Navbar/Navbar';
import Slider from './Component/Slider/Slider';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Footer from './Component/Footer/Footer';
import AboutUs from './Component/AboutUs/AboutUs'
import Rooms from './Component/Room/Room'
import Services from './Component/Service/Services'
import Contact from './Component/Contact/Contact'

function App() {
  return (
    <>
      < Header />
      <Navigation />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
