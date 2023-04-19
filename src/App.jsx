import "./App.css";
import Navbar from "./NavBar/Navbar";
import Hero from "./Hero/Hero";

function App() {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
