import {BrowserRouter} from "react-router-dom";
import {useEffect, useState} from "react";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,Extracurriculars, StarsCanvas} from "./components";

const App = () => {


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

if (isMobile){
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Feedbacks />
        <Experience />
        <Works />
        <Extracurriculars />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div> 
    </BrowserRouter>
  )
} else {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Feedbacks />
        <Experience />
        <Works />
        <Extracurriculars />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div> 
    </BrowserRouter>
  )
}
  
}

export default App;
