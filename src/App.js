import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
//import Portfolio from "./components/Portfolio";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div>
      <Navbar />
      <SideNav />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
