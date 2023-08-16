import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WppBtn from "./components/WppBtn.jsx";

import Home from "./pages/Home.jsx";
import Programs from "./pages/Programs.jsx";
import ProgramDetails from "./pages/ProgramDetails.jsx";
import Destinations from "./pages/Destinations.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Accommodations from "./pages/Accommodations.jsx";
import AboutUs from "./pages/aboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes anchorScrolling="smooth">
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <WppBtn />
      <Footer />
    </>
  );
}

export default App;
