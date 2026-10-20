import { useState } from 'react'
import Login from './Login'
import Navbar from './Navbar'
import './App.css'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'

function App() 
  
  {
      const router=createBrowserRouter([
          {path:"/",
            element:<Home/>
          },
          {path:"/",
            element:<Login/>},
      ])

  return (
    <>
     
        <Navbar/>
        
        
        <RouterProvider router={router}/>
        
       
    </>
  )
}

export default App
