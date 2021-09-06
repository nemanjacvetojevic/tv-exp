import styled from 'styled-components'

export const StyledColorSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 32px 44px;
  & .color-container {
    width: 64px;
    height: 64px;
    border-radius: 50px;
    margin-right: 10px;
    margin-bottom: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 400ms ease-in-out;
    &:hover {
      opacity: 0.7;
    }

    & svg {
      stroke: #fff;
    }

    &.black {
      background-color: #000;
    }
    &.red {
      background-color: #ef3030;
    }
    &.blue {
      background-color: #3940f2;
    }
    &.green {
      background-color: #5cea95;
    }
    &.yellow {
      background-color: #fff73d;
    }
    &.orange {
      background-color: #ff8d3b;
    }
    &.grey {
      background-color: #c3c3c3;
    }
    &.white {
      border: 1px solid rgba(0, 0, 0, 0.27);
    }
  }
`
