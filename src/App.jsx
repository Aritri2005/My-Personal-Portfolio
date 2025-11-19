import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About></About>
                <Projects></Projects>
                <Contact></Contact>
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/projects"
            element={
              <>
                <Projects></Projects>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Contact></Contact>
                <Footer></Footer>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;
