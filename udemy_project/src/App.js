import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Adduser from './components/Adduser';
import FoodOrderApp from './components/FoodOrderApp/UI/FoodOrderApp'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/Food" element={<FoodOrderApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
