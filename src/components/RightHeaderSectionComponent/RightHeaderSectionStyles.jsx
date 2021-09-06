import styled from 'styled-components'

export const StyledRightHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 215px;
  @media (max-width: 768px) {
    min-width: 140px;
  }
  @media (max-width: 425px) {
    margin-bottom: 1.5rem;
  }
  & .cart-wrapper {
    position: relative;
  }

  & .language-select {
    border: none;
  }

  & .cart-count {
    position: absolute;
    top: 12px;
    left: 7px;
    background-color: #f0fff4;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: #2f855a;
    border: 1px solid #9ae6b4;
  }
`
