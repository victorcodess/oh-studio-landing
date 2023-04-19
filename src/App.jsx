import "./App.css";
import Navbar from "./NavBar/Navbar";
import Hero from "./Hero/Hero";
import Work from "./Work/Work";
import Contact from "./contact-section/Contact";
import Footer from "./Footer/Footer";
import ShopBtn from "./Footer/ShopBtn";

function App() {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <Hero />
      <Work />
      <Contact />
      <Footer />
      <ShopBtn />
    </div>
  );
}

export default App;
