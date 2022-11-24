import "./style/App.scss";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import About from "../About/About";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
