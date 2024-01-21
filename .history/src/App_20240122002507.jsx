
import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/header/Navbar';
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
