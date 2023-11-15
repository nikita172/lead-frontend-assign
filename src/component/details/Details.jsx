import React from 'react'
import Detail from '../detail/Detail'
import "./details.css"
const Details = ({ data, setData, pinRef }) => {
  const country = data?.data?.country;
  const clearInfo = () => {
    setData(null);
    pinRef.current.value = "";
  }
  return (
    <div className='detailsContainer'>
      <div className="titles">
        <span>Country</span>
        <span>State</span>
        <span>Place</span>
      </div>
      {data?.data?.places.map(item => (
        <Detail item={item} key={item["place name"]} country={country} />

      ))}
      {data && <button className='clearInfoBtn' onClick={clearInfo}>Clear Information </button>}
    </div>
  )
}

export default Details