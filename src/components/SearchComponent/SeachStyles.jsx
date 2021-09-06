import styled from 'styled-components'

export const StyledSearch = styled.div`
  display: flex;
  width: 52%;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
  border: solid 1px #ebebeb;
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 425px) {
    width: 80%;
    margin-bottom: 1rem;
  }

  & input {
    border: none;
    flex: 1;
    line-height: 2;
    border-bottom-color: none;
    outline-color: transparent;
    color: #5e5e5e;
    font-size: 1.125rem;
  }
`
