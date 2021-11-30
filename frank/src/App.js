import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardData from './components/Card/CardData'
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="container-wrapper">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/card' element={<CardData />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
