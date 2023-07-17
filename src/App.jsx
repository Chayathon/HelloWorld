import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(1)

  const increment_quantity = () => {
    setCount(count + 1)
  }

  const decrement_quantity = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    if(count == 0) {
      alert("มึงกดน้อยกว่า 0 แล้วนะ")
      setCount(1)
    }
  },[count])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ทดสอบการคลิก</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={increment_quantity}>เพิ่ม</button>
        <button onClick={decrement_quantity}>ลด</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
