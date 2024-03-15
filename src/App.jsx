import { useState } from 'react';
import './App.css'
import Sheet from './components/Sheet'

function App() {
  const [color, setColor] = useState("");
  return (
    <div className='app'>
    <h1>Google Sheets</h1>
    <div className="colors">
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
    </div>
    <Sheet color={color} setColor={setColor} />
    </div>
  )
}

export default App
