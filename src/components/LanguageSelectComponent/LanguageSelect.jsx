import React from 'react'

function LanguageSelect({ className }) {
  return (
    <select defaultValue="EN" className={className}>
      <option value="EN">EN</option>
      <option value="FR">FR</option>
    </select>
  )
}

export default LanguageSelect
