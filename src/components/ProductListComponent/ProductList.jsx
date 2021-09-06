import React from 'react'
import Product from '../ProductComponent/Product'
import { StyledProductList, StyledNoProducts } from './ProductListStyles'
import ProductTv from '../../assets/images/tvProduct.png'

function ProductList({ products }) {
  return products.length === 0 ? (
    <StyledNoProducts className="no-prodcuts">
      <p>There are no any products matching your criteria</p>
      {/* <img src={} alt="noresults" /> */}
    </StyledNoProducts>
  ) : (
    <StyledProductList>
      {products.map((product, index) => {
        return (
          <Product
            image={ProductTv}
            name={product.product_name}
            stars={Math.floor(Math.random() * 5) + 1}
            reviews={Math.floor(Math.random() * 100) + 1}
            price={product.product_price}
            specs={product.product_specs}
            key={index}
          />
        )
      })}
    </StyledProductList>
  )
}

export default ProductList
