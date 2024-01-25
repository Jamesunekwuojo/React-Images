import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <link to="/contact" className="nav-item">Contact</link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
