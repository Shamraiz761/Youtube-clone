
import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Search from './pages/search/Search';
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="flex ">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/:term' element={<Search />}/>
       
      </Routes>
      </div>
    </Router>
  );
}

export default App;
