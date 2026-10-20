import Reactl,{useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
      alert ("Color was changed")
    
      return()=>{
        alert("Cleanup hogya ")
      }
      
    }, [color])
    
  return (
    <div>
      I am a Navbar of {color} color hehe.
    </div>
  )
}

export default Navbar
