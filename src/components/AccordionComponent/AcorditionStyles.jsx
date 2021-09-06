import styled from 'styled-components'
export const StyledAccordion = styled.div`
  background-color: #faf8f8;
  border-bottom: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
  position: relative;

  & .accordion-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 44px;
    cursor: pointer;
    @media (max-width: 768px) {
      padding: 18px 22px;
    }
  }

  & .accordion-content {
    background-color: #fff;
    max-height: 0;
    overflow: hidden;
    transition: max-height 400ms ease;
    &.opened {
      max-height: 700px;
    }
  }
`
