import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Discord from './Components/Discord';
import Slack from './Components/Slack';
import WOTC from './Components/WOTC';
import BlueSky from './Components/BlueSky';
import Steam from './Components/Steam';

  function App() {
    return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Discord" element={<Discord />} />
          <Route path="Slack" element={<Slack />} />
          <Route path="BSky" element={<BlueSky />} />
          <Route path="Steam" element={<Steam />} />
          <Route path="WOTC" element={<WOTC />} />
        </Routes>
      </div>
    );
  }

export default App;
