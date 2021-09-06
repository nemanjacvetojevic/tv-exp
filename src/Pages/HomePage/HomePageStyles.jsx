import styled from 'styled-components'

export const StyledHome = styled.div`
  & .home-main-content {
    display: flex;
    padding-left: 6.25rem;
    flex-direction: row;
    @media (max-width: 1680px) {
      padding-left: 5.25rem;
    }
    @media (max-width: 1440px) {
      padding-left: 1.25rem;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      padding-left: 0;
    }
  }

  & .loader-wrapper,
  & .error-wrapper {
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
    align-items: center;
  }
`
