import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
     < Link to="/Home">Home<li>Home</li></Link>
     < Link to="/About">About<li>About</li></Link>
     < Link to="/Contact"><li>Contact</li></Link>
    </nav>
  )

}
export default Navbar
