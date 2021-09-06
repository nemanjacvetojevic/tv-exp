import React, { useState, useEffect } from 'react'
import { StyledHome } from './HomePageStyles'
import HeroComponent from '../../components/HeroComponent/Hero'
import Filter from '../../components/FilterComponent/Filter'
import ProductList from '../../components/ProductListComponent/ProductList'
import { connect } from 'react-redux'
import PuffLoader from 'react-spinners/PuffLoader'
import debounce from '../../services/debounce'

let debouncedFetch

function HomePage({
  brands: brandsState,
  colors: colorsState,
  priceRange: priceRangeState,
}) {
  const baseUrl = process.env.REACT_APP_API_BASE_URL
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const priceRange = `${priceRangeState.minVal},${priceRangeState.maxVal}`
  const colors = colorsState.join()
  const brands = brandsState
    .filter((brand) => brand.isChecked === true)
    .map((brand) => brand.name)
    .join()
  const fetchLink =
    baseUrl +
    `/?product_price=${priceRange}&product_color=${colors}&product_brand=${brands}`
  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(fetchLink)
        if (response.ok) {
          const json = await response.json()
          setData(json)
        } else {
          throw response
        }
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }
    if (debouncedFetch) {
      debouncedFetch.cancel()
    }
    debouncedFetch = debounce(() => {
      init()
    }, 500)
    debouncedFetch()
  }, [fetchLink])

  return (
    <StyledHome>
      <HeroComponent />
      <div className="home-main-content">
        <Filter />
        {loading ? (
          <div className="loader-wrapper">
            <PuffLoader size={90} color="#FDCD0B" />
          </div>
        ) : error ? (
          <div className="error-wrapper">
            <h2>Something went wrong please try again</h2>
          </div>
        ) : (
          <ProductList products={data.products} />
        )}
      </div>
    </StyledHome>
  )
}

function MapStateToProps(state) {
  return {
    brands: state.brands,
    colors: state.colors,
    priceRange: state.prices,
  }
}

export default connect(MapStateToProps)(HomePage)
