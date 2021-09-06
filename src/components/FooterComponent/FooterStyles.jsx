import styled from 'styled-components'

export const StyledFooter = styled.footer`
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-wrap: wrap;

  & .brand-ad {
    font-size: 1.75rem;
    color: #fff;
    background-color: #0065db;
    left: 0;
    bottom: 0;
    font-weight: 700;
    text-transform: uppercase;
    padding: 32px 102px;
    border-top-right-radius: 30px;
    margin-right: 5.625rem;
    @media (max-width: 1680px) {
      padding: 32px 84px;
    }
    @media (max-width: 1440px) {
      padding: 32px 38px;
      margin-right: 3.625rem;
    }
    @media (max-width: 1024px) {
      font-size: 1.3rem;
    }
    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-right: 1.625rem;
      padding: 20px 26px;
    }
    @media (max-width: 425px) {
      width: 100%;
      margin: 0;
      margin-bottom: 1rem;
      border-top-right-radius: 0;
    }
  }

  & .footer-brands-wrapper {
    min-width: 58%;
    width: auto;
    box-sizing: border-box;
    max-width: 1111px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
      width: 60%;
    }
    @media (max-width: 425px) {
      width: 100%;
    }

    & .image-wrapper {
      margin-right: 60px;
      width: auto;
      @media (max-width: 1680px) {
        margin-right: 45px;
      }
      @media (max-width: 1440px) {
        margin-right: 34px;
      }
      @media (max-width: 1024px) {
        width: 15%;
        margin-right: 15px;
      }
    }

    & img {
      width: 100%;
    }
  }
`
