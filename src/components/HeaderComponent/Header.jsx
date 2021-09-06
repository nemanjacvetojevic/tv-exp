import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHeader } from './HeaderStyles'
import Search from '../SearchComponent/Search'
import RightHeaderSection from '../RightHeaderSectionComponent/RightHeaderSection'

function Header() {
  return (
    <StyledHeader>
      <Link className="logo" to="/">
        Logo Here
      </Link>
      <Search placeholder="Search Here..." />
      <RightHeaderSection />
    </StyledHeader>
  )
}

export default Header
