import React from 'react'
import { StyledHero } from './HeroStyles'
import PanasonicLogo from '../../assets/images/Panasonic-logo.png'
import MarshallLogo from '../../assets/images/Marshall-logo.png'
import SenheiserLogo from '../../assets/images/sennheiser-logo.png'
import SonyLogo from '../../assets/images/Sony-Logo.png'
import HeroTv from '../../assets/images/HeroTV.png'

function HeroComponent() {
  return (
    <StyledHero>
      <div className="left-section-wrapper">
        <section className="headings">
          <h2>Refresh your</h2>
          <h1>Tv Experience</h1>
        </section>
        <div className="brand-logos-wrapper">
          <section className="brand-logos">
            <div className="image-wrapper-brands">
              <img src={SonyLogo} alt="Sony" />
            </div>
            <div className="image-wrapper-brands">
              <img src={SenheiserLogo} alt="Senheiser" />
            </div>
            <div className="image-wrapper-brands">
              <img src={MarshallLogo} alt="Marshall" />
            </div>
            <div className="image-wrapper-brands">
              <img src={PanasonicLogo} alt="Panasonic" />
            </div>
          </section>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={HeroTv} alt="Hero Tv" />
      </div>
    </StyledHero>
  )
}

export default HeroComponent
