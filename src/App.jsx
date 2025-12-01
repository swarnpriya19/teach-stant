import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

  function App() {
  return (
    <div className="App">
      <div className="app-container">
         <div>
            <Navbar />
              <div className='flex'>
                  <Sidebar />
                  <Home />
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 
