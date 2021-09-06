import styled from 'styled-components'

export const StyledRangeSlider = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .slider {
    position: relative;
    width: 275px;
  }

  & .slider__track,
  & .slider__range,
  & .slider__left-value,
  & .slider__right-value {
    position: absolute;
  }

  & .slider__track,
  & .slider__range {
    border-radius: 3px;
    height: 5px;
  }

  & .slider__track {
    background-color: #f1f1f1;
    width: 100%;
    z-index: 1;
  }

  & .slider__range {
    background-color: #1a202c;
    z-index: 2;
  }

  & .thumb,
  & .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  & .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 100%;
    outline: none;
  }

  & .thumb--left {
    z-index: 3;
  }

  & .thumb--right {
    z-index: 4;
  }

  & .thumb::-webkit-slider-thumb {
    background-color: #1a202c;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 32px;
    width: 32px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  & .thumb::-moz-range-thumb {
    background-color: #1a202c;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`
