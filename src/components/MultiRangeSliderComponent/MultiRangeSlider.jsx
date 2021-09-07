import React, { useCallback, useEffect, useRef } from 'react'
import { StyledRangeSlider } from './MultiRangeSliderStyles'
const MultiRangeSlider = ({ min, max, onChangeMin, onChangeMax }) => {
  const minValRef = useRef(min)
  const maxValRef = useRef(max)

  const range = useRef(null)
  const getPercent = useCallback((value) => {
    const range = [min, max]
    return Math.round(((value - range[0]) / (range[1] - range[0])) * 100)
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
        min={426.36}
        max={1302.18}
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
export default MultiRangeSlider
