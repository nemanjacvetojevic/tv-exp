import React from 'react'
import { StyledFilter } from './FilterStyles'
import { resetBrands } from '../../redux/actions/brandActions'
import { resetColors } from '../../redux/actions/colorActions'
import { resetPriceRange } from '../../redux/actions/priceActions'
import { connect } from 'react-redux'
import Accordion from '../AccordionComponent/Accordion'
import PriceSelection from '../PriceSelectionComponent/PriceSelection'
import BrandSelection from '../BrandSelectionComponent/BrandSelection'
import ColorSelection from '../ColorSelectionComponent/ColorSelection'
import { bindActionCreators } from 'redux'

const accordionData = [
  {
    title: 'Price',
    content: <PriceSelection />,
  },
  {
    title: 'Brand',
    content: <BrandSelection />,
  },
  {
    title: 'Product Color',
    content: <ColorSelection />,
  },
]

function Filter({ resetBrands, resetColors, resetPriceRange }) {
  const handleClick = () => {
    resetBrands()
    resetColors()
    resetPriceRange()
  }
  return (
    <StyledFilter>
      <div className="filter-heading">
        <h3>Filter By:</h3>
        <button onClick={handleClick}>Reset</button>
      </div>
      {accordionData.map(({ title, content }, index) => (
        <Accordion key={index} title={title}>
          {content}
        </Accordion>
      ))}
    </StyledFilter>
  )
}

function MapStateToProps(state) {
  return state
}

function MapdDispatchToProps(dispatch) {
  return {
    resetBrands: bindActionCreators(resetBrands, dispatch),
    resetColors: bindActionCreators(resetColors, dispatch),
    resetPriceRange: bindActionCreators(resetPriceRange, dispatch),
  }
}

export default connect(MapStateToProps, MapdDispatchToProps)(Filter)
