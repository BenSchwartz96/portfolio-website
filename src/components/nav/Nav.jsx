import React from 'react'
import './nav.css'
import { useState } from 'react'

//Icons
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (

    // In tutorial, was 'services' instead of 'portfolio'
    // Replace the RiServiceLine icon, don't like it. BiBook should be for portfolio, and find another for experience/skills

    //ask CGPT about the href stuff. i think # indicates that its a component and to just move to where it is
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}> <BiBook/> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <RiServiceLine/> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageDetail/> </a>
    </nav>
  )
}

export default Nav