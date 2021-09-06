import React from 'react'
import { StyledSearch } from './SeachStyles'
import { ReactComponent as SearchIcon } from '../../assets/icons/SearchIcon.svg'

function Search({ name, placeholder, onChange, value }) {
  return (
    <StyledSearch>
      <input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      <SearchIcon />
    </StyledSearch>
  )
}

export default Search
