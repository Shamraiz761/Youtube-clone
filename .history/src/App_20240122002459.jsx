
import React from 'react';
import Home from './pages/home/Home';
function App() {
  return (
    <div>
        <Navbar />
      <div className="flex ">
      <Sidebar />
      <Home />
      
    </div>
  );
}

export default App;
