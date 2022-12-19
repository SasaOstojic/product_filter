import React from 'react'
import './Search.css'

const Search = ({inputValue, handler}) => {
  return (
    <div className='--form-control'>
        <input type='text' placeholder="Search products" value={inputValue} onChange={handler} />
    </div>
  )
}

export default Search