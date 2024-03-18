import React from 'react';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const App = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Router>
        <header>
          <GiHamburgerMenu onClick={()=>setShowNav(!showNav)}/>
        </header>
        <Navbar show={showNav} />
        <div className='main'>
          <Routes>
            <Route path='/' exact={true} Component={Dashboard} />
            <Route path='/signin' exact={true} Component={SignIn} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
