import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import './App.css'
import { Vocabulary } from './pages/Vocabulary';
import { Pronunce } from './pages/Pronunce';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/vocabulary' element={<Vocabulary />} />
          <Route path='/pronunce' element={< Pronunce/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
