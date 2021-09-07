import React from 'react'
import { StyledPriceSelection } from './PriceSelectionStyles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as priceActions from '../../redux/actions/priceActions'
import MultiRangeSlider from '../MultiRangeSliderComponent/MultiRangeSlider'

function PriceSelection(props) {
  const { minVal, maxVal, setMaxVal, setMinVal } = props
  return (
    <StyledPriceSelection>
      <h4>Price Range Selected:</h4>
      <div className="values-selected">{'€ ' + minVal + ' - € ' + maxVal}</div>
      <div className="range-selector-wrapper">
        <MultiRangeSlider
          onChangeMin={(minValue) => {
            setMinVal(minValue)
          }}
          onChangeMax={(maxValue) => {
            setMaxVal(maxValue)
          }}
          min={minVal}
          max={maxVal}
        />
      </div>
    </StyledPriceSelection>
  )
}

function MapStateToProps(state) {
  return {
    minVal: state.prices.minVal,
    maxVal: state.prices.maxVal,
  }
}
function MapDispatchToProps(dispatch) {
  return {
    setMinVal: bindActionCreators(priceActions.setMinVal, dispatch),
    setMaxVal: bindActionCreators(priceActions.setMaxVal, dispatch),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(PriceSelection)
