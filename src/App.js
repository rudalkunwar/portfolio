import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import History from "./Components/History";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="history" element={<History />} />
          </Route>
          <Route path="/Service" element={<Service/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
