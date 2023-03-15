import React from 'react'
import './about.css'

//Icons/Assets

import {FaAward} from 'react-icons/fa'
import {AiOutlineFlag} from 'react-icons/ai'
import {FaCode} from 'react-icons/fa'

import placeholder_me from '../../assets/placeholder_me.jpg'
import main_me_pic from '../../assets/portfolio_pfp.png'

const About = () => {
  return (
    <section id="about" className="about__section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={placeholder_me} alt="About image" /> */}
            <img src={main_me_pic} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaCode className="about__icon"/>
              <h5>Seeking</h5>
              <small>A role as a Full-Stack Web Developer in a team where I can learn and grow.</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Graduated</h5>
              <small>from the University of St Andrews (Psychology) and later the Career Foundry bootcamp.</small>
            </article>

            <article className="about__card">
              <AiOutlineFlag className="about__icon"/>
              <h5>Nationality</h5>
              <small>Citizen of the US & Sweden, yet culturally British. Fluent in English & conversational in Swedish.</small>
            </article>

          </div>

            <p>
              Hey! I'm Ben Schwartz (26), and I'm ready to start my career as a Full-Stack Developer. You'll find me friendly, passionate, and committed both to honing my craft, and to being a great team member. Though the COVID crisis has been a difficult and disruptive time, I've spent the last few years learning new skills and reflecting on what I want from my life and career. I believe I'm now ready to start the next part of my journey, and if you're interested in hiring a web developer, I'd love to talk with you.
            </p>

            <a href="#contact" className="btn btn-primary">Let's talk!</a>

        </div>

      </div>

    </section>
  )
}

export default About