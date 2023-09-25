import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"
import Home from './Page/Home';
import SideComponents from './components/SideComponents';


function App() {

  return (
    <>
      <Router>
        <div className="main-div">
          <div className="side-component">
            <SideComponents />
          </div>
          <div className='routes-conatiner'>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
