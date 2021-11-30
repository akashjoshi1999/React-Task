import { useState } from 'react';
import FunctionBaseComp from './components/FunctionBaseComp';
import ClassBaseComp from './components/ClassBaseComp'
import Tilt from './components/Tilt';
import './App.css';
import UseEffectInClass from './components/UseEffectInClass';


function App() {
  const [showTilt, setShowTilt] = useState(true)
  return (
    <div className="App">
      <h1>Using functional components</h1>
      <FunctionBaseComp />
      <h1>Using Class components</h1>
      <ClassBaseComp />
      <div>
        <label>
          <input
            type="checkbox"
            checked={showTilt}
            onChange={e => setShowTilt(e.target.checked)}
          />
          show tilt
        </label>
        {showTilt ? (
          <Tilt>
            <div className="totally-centered">vanilla-tilt.js</div>
          </Tilt>
        ) : null}
      </div>
      <UseEffectInClass />
    </div>
  );
}

export default App;
