import React from 'react'
import { StyledRightHeaderSection } from './RightHeaderSectionStyles'
import LanguageSelect from '../LanguageSelectComponent/LanguageSelect'
import Cart from '../CartComponent/Cart'
import Profile from '../ProfileComponent/Profile'
import { connect } from 'react-redux'

function RightHeaderSection({ cartCount }) {
  return (
    <StyledRightHeaderSection>
      <LanguageSelect className="language-select" />
      <div className="cart-wrapper">
        <Cart />
        {cartCount !== 0 && <div className="cart-count">{cartCount}</div>}
      </div>
      <Profile />
    </StyledRightHeaderSection>
  )
}

function MapStateToProps(state) {
  return {
    cartCount: state.product,
  }
}

export default connect(MapStateToProps)(RightHeaderSection)
