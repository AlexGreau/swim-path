import { useState } from 'react'
import './App.css'
import LearningMap from './components/LearningMap'

function App() {
  const [hexCount, setHexCount] = useState(0)

  return (
    <>
      <div>
        <h1>Swim Path</h1>
      </div>
      <div className="card">
        <button onClick={() => setHexCount((hexCount) => hexCount + 1)}>
          Add
        </button>
        <button onClick={() => setHexCount((hexCount) => Math.max(0, hexCount - 1))}>
          Remove
        </button>
        <button onClick={() => setHexCount(0)}>
          Reset
        </button>
      </div>
        <LearningMap hexCount={hexCount} />
    </>
  )
}

export default App
