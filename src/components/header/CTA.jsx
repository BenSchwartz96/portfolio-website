import React from 'react'

import CV from '../../assets/BenSchwartz_CV.pdf'

// Call to action buttons
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact</a>

    </div>
  )
}

export default CTA