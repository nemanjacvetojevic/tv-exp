import React from 'react'
import { StyledProduct } from './ProductStyles'
import { ReactComponent as Star } from '../../assets/icons/star.svg'
import { ReactComponent as Compare } from '../../assets/icons/Compare.svg'
import { ReactComponent as Favorite } from '../../assets/icons/heart.svg'
import { ReactComponent as Cart } from '../../assets/icons/Cart.svg'
import { addToCart } from '../../redux/actions/productActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function Product({ image, name, stars, reviews, price, specs, addToCart }) {
  const productReview = (
    <div className="product-reviewvs">
      <div className="rating-stars">
        <Star /> <span> {stars} </span>
      </div>{' '}
      ({reviews}) Reviews
    </div>
  )
  return (
    <StyledProduct>
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>
      <h5 className="product-name">{name}</h5>
      <div className="product-info-wrapper">
        <div className="product-info">
          {productReview}
          <div className="product-specs">{specs}</div>
          <h5 className="product-price">€ {price}</h5>
        </div>
        <div className="prodcut-actions">
          <Compare />
          <Favorite />
          <Cart onClick={() => addToCart()} />
        </div>
      </div>
    </StyledProduct>
  )
}

function mapStateToProps(state) {
  return state
}

function MapdDispatchToProps(dispatch) {
  return {
    addToCart: bindActionCreators(addToCart, dispatch),
  }
}

export default connect(mapStateToProps, MapdDispatchToProps)(Product)
