import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Discord from './Components/Discord';
import Slack from './Components/Slack';

  function App() {
    return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Discord" element={<Discord />} />
          <Route path="Slack" element={<Slack />} />
        </Routes>
      </div>
    );
  }

export default App;
