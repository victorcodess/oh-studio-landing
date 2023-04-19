import "./App.css";
import Navbar from "./NavBar/Navbar";
import Hero from "./Hero/Hero";
import Work from "./Work/Work";
import Contact from "./contact-section/Contact";

function App() {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <Hero />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
