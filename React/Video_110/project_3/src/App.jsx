import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'


function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "Hey Girlie pops",
      desc: "Yeh humara linkedin isse dekhlo"
    },
    {
      title: "Hey Borly pops",
      desc: "Yeh humara linkedin isse dekhlo zzzzziiiiiiiiiii"
    },
    {
      title: "Hey Girlie popicle",
      desc: "Yeh humara linkedin isse dekhlo naaaaaaaaaaa"
    }
  ])
  const Todo = ({ title, desc }) => {
    return (<>
      <div className="m-4 p-4 rounded-lg shadow-md bg-gray-900 text-white">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm opacity-80">{desc}</p>
      </div>
      </>
    );
  };

  return (
    <>
      <div >
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* {showbtn && <button>I wil be shown when second button is clicked</button>} */}
      {todos.map((todo, index) => {
        return(
        <div key={index} className="m-4 border border-purple-400 p-2 rounded">
          <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm opacity-80">{desc}</p>

        </div>)
})}


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <h1 className="text-3xl font-bold underline text-purple-600">
          Hello Tailwind 🎉
        </h1>


      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
