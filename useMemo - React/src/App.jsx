import { useState } from 'react'
import { useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums = new Array(29_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMAgical: i === 20_000_000
  }
})


function App() {
  const [count, setCount] = useState(0)
  const [Number, setNumber] = useState(nums)
  // const magical = Number.find((item)=>item.isMAgical)
  const magical = useMemo(() => Number.find((item) => item.isMAgical), [Number])
  return (
    <>
      <div>
        <p>The isMagical {magical.index}</p>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          if (count == 10) {
            setNumber(new Array(29_000_000).fill(0).map((_, i) => {
              return {
                index: i,
                isMAgical: i === 100
              }
            }))
          }
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
