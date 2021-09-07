import React, { useCallback, useEffect, useRef } from 'react'
import { StyledRangeSlider } from './MultiRangeSliderStyles'
const MultiRangeSlider = ({ min, max, onChangeMin, onChangeMax }) => {
  const minValRef = useRef(min)
  const maxValRef = useRef(max)

  const range = useRef(null)
  const getPercent = useCallback((value) => {
    const range = [min, max]
    return Math.round(((value - 424.36) / (1302.84 - 424.36)) * 100)
  }, [])

  useEffect(() => {
    const minPercent = getPercent(min)
    const maxPercent = getPercent(maxValRef.current)
    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [min, getPercent])

  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(max)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [max, getPercent])

  return (
    <StyledRangeSlider className="container">
      <input
        type="range"
        min={426}
        max={1302.84}
        value={min}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), max - 1)
          onChangeMin(value)
        }}
        className="thumb thumb--left"
        style={{ zIndex: min > max - 100 && '5' }}
      />
      <input
        type="range"
        min={426}
        max={1302.84}
        value={max}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), min + 1)
          onChangeMax(value)
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
      </div>
    </StyledRangeSlider>
  )
}

// function MapStateToProps(state) {
//   return {
//     minVal: state.minVal,
//     maxVal: state.maxVal,
//   }
// }

// function MapdDispatchToProps(dispatch) {
//   return {
//     setMinVal: bindActionCreators(priceActions.setMinVal, dispatch),
//     setMaxVal: bindActionCreators(priceActions.setMaxVal, dispatch),
//   }
// }

// export default connect(MapStateToProps, MapdDispatchToProps)(MultiRangeSlider)
export default MultiRangeSlider
