import React from 'react'
import { StyledBrands } from './BrandSelectionStyles'
import Checkbox from '../CheckboxComponent/Checkbox'
import { connect } from 'react-redux'
import * as brandActions from '../../redux/actions/brandActions'
import { bindActionCreators } from 'redux'

const BrandSelection = ({ setBrands, brands }) => {
  const handleOnChange = (name, value, isChecked) => {
    let newState = brands.map((item) => {
      if (item.name === name) {
        return { name, value, isChecked: !isChecked }
      }
      return item
    })
    setBrands(newState)
  }
  return (
    <StyledBrands>
      {brands.map((item, index) => {
        return (
          <Checkbox
            onChange={handleOnChange}
            key={index}
            name={item.name}
            isChecked={item.isChecked}
            value={item.value}
          />
        )
      })}
    </StyledBrands>
  )
}

function MapStateToProps(state) {
  return {
    brands: state.brands,
  }
}

function MapDispatchToProps(dispatch) {
  return {
    setBrands: bindActionCreators(brandActions.setBrands, dispatch),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(BrandSelection)
