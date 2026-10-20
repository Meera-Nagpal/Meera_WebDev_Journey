import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-voilet-100">
        <div className="addTodo">
          <h1 className="text-lg font-bold ">Add a todo</h1>
          
        </div>
        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
          <div className="todos"></div>
        </div>
      </div>
        
    </>
  )
}

export default App
