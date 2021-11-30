import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Post from './components/Post';
import User from './components/User';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/posts" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
