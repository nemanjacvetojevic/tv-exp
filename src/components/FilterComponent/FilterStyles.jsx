import styled from 'styled-components'

export const StyledFilter = styled.aside`
  width: 21.25%;
  @media (max-width: 1680px) {
    width: 25%;
  }
  @media (max-width: 1024px) {
    width: 25%;
  }
  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  & .filter-heading {
    background-color: #0065db;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 21px 45px;
    align-items: center;
    border-radius: 15px 15px 0 0;
    @media (max-width: 1024px) {
      padding: 21px 21px;
    }

    & button {
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 8px;
      padding: 12px 26px;
      font-size: 1.25rem;
      cursor: pointer;
      @media (max-width: 1024px) {
        font-size: 1.1rem;
        padding: 12px 24px;
      }
    }
    & h3 {
      margin: 0;
      font-size: 1.625rem;
      text-transform: uppercase;
      @media (max-width: 1024px) {
        font-size: 1.3rem;
      }
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }
`
