import React from 'react'
import Header from './components/header/Header'
import Blibble from './components/blibble/Blibble'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Details from './components/details/Details'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

//Root app component
const App = () => {
  return (
    //Importing all components in order I want them displayed on page
    <>
      <Header />
      {/* <Blibble /> */}
      <Nav />
      <About />
      <Details />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App