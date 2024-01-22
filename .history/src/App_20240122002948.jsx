
import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router , Routes   } from 'react-router-dom';
function App() {
  return (
    <div>
        <Navbar />
      <div className="flex ">
      <Sidebar />
      <Home />
      </div>
    </div>
  );
}

export default App;
