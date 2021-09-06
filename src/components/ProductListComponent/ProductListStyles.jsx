import styled from 'styled-components'

export const StyledProductList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 30px;
  align-self: baseline;
  position: relative;
  right: -2rem;
  @media (max-width: 1024px) {
    padding-left: 0;
  }
  @media (max-width: 768px) {
    right: 0;
    padding: 0 1rem;
  }
`

export const StyledNoProducts = styled.div`
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  display: flex;
`
