import React from 'react'
import './header.css'

//Components
import CTA from './CTA'
import HeaderSocials from './headerSocials'


// Assets
import me_img from '../../assets/tutorial-assets/me.png'
import placeholder_me from '../../assets/placeholder_me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Ben Schwartz</h1>
        <h5 className="text-light">Full Stack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me-img">
          <img src={placeholder_me} alt="Myself" />
        </div>

        {/* Not sure I even want this */}
        <a href="#contact" className="scroll_down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header