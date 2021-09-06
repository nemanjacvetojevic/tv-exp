import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1% 0 1% 5%;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 1% 5% 1% 5%;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }

  & .logo {
    color: #000;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.875rem;
    letter-spacing: 0;
    @media (max-width: 1024px) {
      font-size: 1.3rem;
    }
    @media (max-width: 425px) {
      margin-bottom: 1rem;
    }
  }
`
