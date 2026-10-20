import React from 'react'
import Footer from './Footer'


const Nav = (props) => {
  return (
    <div classname="logo">{props.logotext}
      <ul>
      <li>Home</li>
      <li>Food</li>
      <li>Option</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Nav
