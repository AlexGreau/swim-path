import { useState } from 'react'
import './App.css'
import Hex from './components/Hex'

function App() {
  const [hexCount, setHexCount] = useState(0)

  return (
    <>
      <div>
        <h1>Swim Path</h1>
      </div>
      <div className="card">
        <button onClick={() => setHexCount((hexCount) => hexCount + 1)}>
          hex count is {hexCount}
        </button>
        {Array.from({ length: hexCount }).map((_, i) => (
          <Hex key={i} size={100} fill="rgba(53, 53, 172, 1)" title={`Hexagon ${i + 1}`} />
        ))}
      </div>
    </>
  )
}

export default App
