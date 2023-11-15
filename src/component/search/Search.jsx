import React from 'react'
import "./search.css"
const Search = ({ searchPin, pinRef }) => {


  return (
    <div className='searchContainer'>
      <input placeholder='Please enter pincode' ref={pinRef} />
      <button onClick={searchPin}>Search</button>
    </div>
  )
}

export default Search