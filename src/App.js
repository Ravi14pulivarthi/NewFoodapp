import React from 'react'
import Home from './Foodrect/Home';
import Navbar from './Foodrect/Navbar'
import Innerpage from './Foodrect/Innerpage'
import Redux from './Foodrect/Redux'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div >
      <Router>
    
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='innerpage' element={<Innerpage/>}/>
          <Route  path='redux' element={<Redux/>}/>
        </Routes>
      </Router>
 
      
    </div>
  );
}

export default App;
