import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BeerList from "./pages/BeerList";
import BeerDetail from "./pages/BeerDetail";
import BeerRandom from "./pages/BeerRandom";
import NewBeer from "./pages/NewBeer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:beerId" element={<BeerDetail />} />
        <Route path="/random-beer" element={<BeerRandom />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
