import { Route, Routes } from "react-router-dom";

import {
  AboutUs,
  Accommodations,
  Contact,
  Courses,
  Destinations,
  Home,
  Programs,
  ProgramDetails,
  DestinationDetails
} from "./pages/main.js";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WppBtn from "./components/WppBtn.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WppBtn/>
      <Footer />
    </>
  );
}

export default App;
