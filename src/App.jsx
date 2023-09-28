import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"
import SideComponents from './components/SideComponents';
import Home from './page/Home';
import { useState } from 'react';


function App() {
  const [sideValue, setSideValue] = useState("home")
  
  const SetSideValueChange = (value) => {
    setSideValue(value)
  }

  return (
    <>
      <Router>
        <div className="main-div">
          <div className="side-component">
            <SideComponents active={sideValue} />
          </div>
          <div className='routes-conatiner'>
            <Routes>
              <Route exact path='/' element={<Home sideMethod={SetSideValueChange} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
