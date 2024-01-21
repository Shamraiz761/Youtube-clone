import { useState } from 'react'
import Navbar from './components/header/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <h1>Home</h1>
   </div>
  )
}

export default App
