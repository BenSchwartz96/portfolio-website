import React from 'react'
import './portfolio.css'

//Images
import img1 from '../../assets/tutorial-assets/portfolio1.jpg'
import img2 from '../../assets/tutorial-assets/portfolio2.jpg'
import img3 from '../../assets/tutorial-assets/portfolio3.jpg'
import img4 from '../../assets/tutorial-assets/portfolio4.jpg'
import img5 from '../../assets/tutorial-assets/portfolio5.png'
import img6 from '../../assets/tutorial-assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: img1,
    title: 'This Website',
    description: 'The site you\'re on right now. Made with React, JS, & CSS.',
    github: 'https://github.com/BenSchwartz96/portfolio-website',
    demo: 'none'
  },
  {
    id: 2,
    image: img2,
    title: 'Budget Pokedex',
    description: 'My first contact with Javascript - A very simple Pokedex app that lets you find and see information about generation 1 Pokemon.',
    github: 'https://github.com/BenSchwartz96/simple-pokedex',
    demo: 'https://benschwartz96.github.io/simple-pokedex/'
  },
  {
    id: 3,
    image: img3,
    title: 'Movie API w NodeJS',
    description: 'An API, built with NodeJS, Express, MongoDB & Mongoose, to tie into a later project. The API interacts with a database containing information about movies, directors, and users.',
    github: 'https://github.com/BenSchwartz96/Movie-API',
    demo: 'none'
  },
  {
    id: 4,
    image: img3,
    title: 'MyFlix (React)',
    description: 'My initial learning project with React. A basic site that allows you to sign up, peruse information about movies, directors, and genres, and select favorites.',
    github: 'https://github.com/BenSchwartz96/myFlix-client',
    demo: 'https://bms-myflix.netlify.app/'
  },
  {
    id: 5,
    image: img4,
    title: 'MyFlix (Angular)',
    description: 'Another version of MyFlix, this time made with (and for the purposes of learning) Angular.',
    github: 'https://github.com/BenSchwartz96/myflix_angular',
    demo: 'https://benschwartz96.github.io/myflix_angular/welcome'
  },
  {
    id: 6,
    image: img5,
    title: 'Meet (PENDING VERIFICATION)',
    description: 'A PWA built using a test-driven development approach, which linked to the Google Calendar API to find events and present information about them. In this project, I began learning Enzyme, Jest, OAuth2 and AWS.',
    github: 'https://github.com/BenSchwartz96/meet',
    demo: 'https://benschwartz96.github.io/meet/'
  },
  {
    id: 7,
    image: img6,
    title: 'React Native Chat App',
    description: 'Chat app made with (and for the purposes of learning) react native. Used gifted chat too',
    github: 'https://github.com/BenSchwartz96/chat_app',
    demo: 'none'
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Learning Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

          {
            data.map(({id, image, title, description, github, demo}) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-img">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target='_blank'>Github</a>
                    {demo !== 'none' && (
                      <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                    )}
                  </div>
              </article>
              )
            })
          }

      </div>

    </section>
  )
}

export default Portfolio