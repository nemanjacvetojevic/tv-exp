import React from 'react'
import { StyledFooter } from './FooterStyles'
import LGImage from '../../assets/images/image 36.png'
import PS4Image from '../../assets/images/image 35.png'
import SamsungImage from '../../assets/images/image 34.png'
import GarminImage from '../../assets/images/image 37.png'
import TefalImage from '../../assets/images/image 39.png'

const footerBrands = [
  { src: PS4Image, alt: 'PS4' },
  { src: LGImage, alt: 'Lg' },
  { src: SamsungImage, alt: 'Samsung' },
  { src: GarminImage, alt: 'Garmin' },
  { src: TefalImage, alt: 'Tefal' },
]

const FooterBrands = ({ brands }) => (
  <div className="footer-brands-wrapper">
    {brands.map((brand, index) => (
      <div className="image-wrapper">
        <img key={index} src={brand.src} alt={brand.alt} />
      </div>
    ))}
  </div>
)

function Footer() {
  return (
    <StyledFooter>
      <div className="brand-ad">More than 100 brands</div>
      <FooterBrands brands={footerBrands} />
    </StyledFooter>
  )
}

export default Footer
