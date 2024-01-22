
import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<h1>Search</h1>}/>
        <Route path='/watch' element={<h1>Watch</h1>}/>
        <Route path='/feed' element={<h1>Feed</h1>}/>
        <Route path='/collection' element={<h1>Collection</h1>}/>
        <Route path='/history' element={<h1>History</h1>}/>
        <Route path='/yourvideos' element={<h1>Your Videos</h1>}/>
        <Route path='/likedvideos' element={<h1>Liked Videos</h1>}/>
        <Route path='/playlist' element={<h1>Playlist</h1>}/>
        <Route path='/showmore' element={<h1>Show More</h1>}/>
      </Routes>
        <Navbar />
      <div className="flex ">
      <Sidebar />
      <Home />
      </div>
    </Router>
  );
}

export default App;
