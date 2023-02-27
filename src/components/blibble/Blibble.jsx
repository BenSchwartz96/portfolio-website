import React from 'react'
import './blibble.css'

//Components
import BlibbleCTA from './blibbleCTA'
import BlibbleSocials from './blibbleSocials'


// Assets
import me_img from '../../assets/tutorial-assets/me.png'
import placeholder_me from '../../assets/placeholder_me.jpg'

const Blibble = () => {
  return (
    <section id="blibble">
      <div className="container blibble__container">

        <div className="blibble__intro">
          <h1>Ben Schwartz</h1>
          <h5 className="text-light">Full Stack Developer</h5>

          <p> </p>

          <BlibbleCTA />
          {/* <BlibbleSocials /> */}

        </div>

        <div className="blibble-img__container">
          <div className="blibble-img">
            <img src={placeholder_me} alt="Myself" />
          </div>
        </div>


      </div>
    </section>
  )
}

export default Blibble