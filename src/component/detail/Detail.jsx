import React from 'react'
import "./detail.css"
const Detail = ({ item, country }) => {
  return (
    <div className='DetailContainer'>
      <span>{country}</span>
      <span>{item.state}</span>
      <span>{item["place name"]}</span>
    </div>
  )
}

export default Detail