//This section will be presented as "skills", that is, which languages/packages im familiar with.

import React from 'react'
import './skills.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h5></h5>
      <h2>My Skills</h2>

      <div className="container skills__container">

        {/* START OF FRONT-END SECTION */}
        <div className="skills__frontend">
          <h3>Front-End Development</h3>
          <div className="skills__content">
          
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React + React Native</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Expo</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT-END SECTION */}

        {/* START OF BACK-END SECTION */}
        <div className="skills__backend">
          <h3>Back-End Development</h3>
          <div className="skills__content">
            
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>OAuth2</h4>
                <small className="text-light"></small>
              </div>
            </article>
                        
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Enzyme</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Jest</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACK-END SECTION */}

        {/* START OF OTHER SECTION */}
        <div className="skills__other">
          <h3>Other Skills</h3>
          <div className="skills__content">

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Adobe Premiere Pro</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Adobe After-Effects</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Basic Statistics</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Communication</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACK-END SECTION */}

      </div>
    </section>
  )
}

export default Skills