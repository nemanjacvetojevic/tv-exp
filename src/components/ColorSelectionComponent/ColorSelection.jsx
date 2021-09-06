import React from 'react'
import { colors } from '../../utils/Colors'
import { ReactComponent as Check } from '../../assets/icons/check.svg'
import { StyledColorSelection } from './ColorSelectionStyles'
import * as colorActions from '../../redux/actions/colorActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function ColorSelection({ colorsState, setColors }) {
  function handleClick(color) {
    if (colorsState.includes(color)) {
      const newState = colorsState.filter((item) => item !== color)
      setColors(newState)
    } else if (!colorsState.includes(color)) {
      const newState = [...colorsState, color]
      setColors(newState)
    }
  }
  function CheckColor(color) {
    return colorsState.find((colorSpecific) => colorSpecific === color)
  }
  return (
    <StyledColorSelection>
      {colors.map((color, index) => {
        return (
          <div
            onClick={() => handleClick(color)}
            className={`color-container ${color}`}
            key={index}
          >
            {CheckColor(color) && <Check />}
          </div>
        )
      })}
    </StyledColorSelection>
  )
}

function mapStateToProps(state) {
  return {
    colorsState: state.colors,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setColors: bindActionCreators(colorActions.setColors, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelection)
