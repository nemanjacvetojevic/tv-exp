import styled from 'styled-components'

export const StyledHero = styled.div`
  padding: 0 10%;
  min-height: 555px;
  background-color: #fdcd0b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 52px;
  @media (max-width: 1024px) {
    min-height: 355px;
  }
  @media (max-width: 425px) {
    flex-direction: column-reverse;
    padding: 0 5%;
  }
  & .left-section-wrapper {
    margin-top: 6.25rem;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1024px) {
      min-height: 200px;
      margin-top: 2rem;
    }
  }
  & .headings {
    text-align: left;
    letter-spacing: 0.04rem;
    & h2 {
      font-size: 3.125rem;
      color: #fff;
      font-weight: 300;
      margin: 0;
      @media (max-width: 1680px) {
        font-size: 2.5rem;
      }
      @media (max-width: 1024px) {
        font-size: 2rem;
      }
    }
    & h1 {
      text-transform: uppercase;
      font-size: 6.25rem;
      margin: 0;
      font-weight: 900;
      line-height: 0.9;
      @media (max-width: 1680px) {
        font-size: 5.5rem;
      }
      @media (max-width: 1440px) {
        font-size: 4.5rem;
      }
      @media (max-width: 1024px) {
        font-size: 3.5rem;
      }
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
      @media (max-width: 425px) {
        font-size: 2.8rem;
      }
    }
  }
  & .brand-logos-wrapper {
    display: flex;
  }
  & .image-wrapper {
    width: 35%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1024px) {
      width: 45%;
    }
    @media (max-width: 425px) {
      width: 80%;
      margin-top: 2rem;
    }
    & img {
      width: 100%;
    }
  }
  & .brand-logos {
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 75%;
    flex-grow: 1;
    & .image-wrapper-brands {
      @media (max-width: 1024px) {
        width: 20%;
      }
      & img {
        width: 100%;
      }
    }
    @media (max-width: 1680px) {
      max-width: 85%;
    }
    @media (max-width: 1440px) {
      max-width: 100%;
    }
  }
`
