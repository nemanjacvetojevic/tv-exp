import React, { useState } from 'react'
import { StyledAccordion } from './AcorditionStyles'
import { ReactComponent as AccordionArrowDown } from '../../assets/icons/accordion-arrow-down.svg'
import { ReactComponent as AccordionArrowUp } from '../../assets/icons/accordion-arrow-up.svg'

function Accordion(props) {
  const [isActive, setIsActive] = useState(false)
  return (
    <StyledAccordion className="accordition">
      <div className="accordion-item" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-title">{props.title}</div>
        <div>{isActive ? <AccordionArrowUp /> : <AccordionArrowDown />}</div>
      </div>
      <div className={`accordion-content ${isActive ? 'opened' : ''}`}>
        {props.children}
      </div>
    </StyledAccordion>
  )
}

export default Accordion
