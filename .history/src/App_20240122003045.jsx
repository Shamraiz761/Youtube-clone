
import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
function App() {
  return (
    <Route>
        <Navbar />
      <div className="flex ">
      <Sidebar />
      <Home />
      </div>
    </Route>
  );
}

export default App;
