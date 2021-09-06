import React from 'react'
import { StyledCheckbox } from './CheckboxStyles'

function Checkbox({ name, value, onChange, isChecked }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={`custom-checkbox-${name}`}
        name={name}
        value={value}
        onChange={() => {
          onChange(name, value, isChecked)
        }}
        checked={isChecked}
      />
      <label htmlFor={`custom-checkbox-${name}`}>{name}</label>
    </StyledCheckbox>
  )
}

export default Checkbox
