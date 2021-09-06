import styled from 'styled-components'

export const StyledProduct = styled.section`
  border-radius: 20px;
  border: 1px solid #e2e2e2;
  padding: 2.2rem 2rem;
  margin-bottom: 2.5rem;
  width: 30%;
  box-sizing: border-box;
  margin-right: 1.8rem;
  @media (max-width: 1024px) {
    width: 44%;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin: 0 auto;
  }

  & .image-wrapper {
    overflow: hidden;
    margin-bottom: 1.2rem;
    & img {
      width: 100%;
    }
  }

  & .product-info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .product-name {
    font-size: 1.325rem;
    color: #1a202c;
    font-weight: 600;
    max-width: 360px;
    text-align: left;
    margin: 0;
    margin-bottom: 1.2rem;
    min-height: 54px;
  }

  & .product-specs {
    word-break: break-all;
    max-width: 100px;
    text-align: left;
    text-transform: lowercase;
    color: #969696;
    margin-bottom: 1rem;
  }

  & .product-price {
    font-size: 1.75rem;
    color: #1a202c;
    font-weight: 700;
    margin: 0;
  }

  & .product-reviewvs {
    font-size: 1rem;
    color: #a0aec0;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  & .prodcut-actions {
    height: 155px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-end;

    & svg {
      cursor: pointer;
    }
  }

  & .rating-stars {
    margin-right: 0.2rem;
    font-weight: 600;
    font-size: 1rem;
    color: #f6ad55;
    margin-bottom: 1.1.rem;
    display: flex;
    align-items: center;
    & span {
      margin-left: 0.3rem;
    }
  }
`
