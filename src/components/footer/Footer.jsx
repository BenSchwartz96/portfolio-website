import React from 'react'
import './footer.css'

import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Ben Schwartz</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/benjamin.schwartz.98/" target='_blank'> <BsFacebook/> </a>          {/* Make sure these work */}
        <a href="https://www.linkedin.com/mynetwork/invite-connect/connections/" target='_blank'> <BsLinkedin/> </a>         
        <a href="https://github.com/BenSchwartz96" target='_blank'> <FaGithub/> </a>         
      </div>



    </footer>
  )
}

export default Footer