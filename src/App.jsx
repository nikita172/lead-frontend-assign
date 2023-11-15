import React, { useRef, useState } from 'react'
import Search from './component/search/Search'
import Details from './component/details/Details'
import Header from './component/header/Header'
import axios from "axios";
import "./app.css"
function App() {
  const [data, setData] = useState();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const pinRef = useRef();

  const searchPin = async () => {
    try {
      setLoading(true);
      setErr(false)
      const data = await axios(`https://api.zippopotam.us/in/${pinRef.current.value}`);
      setData(data);
      setLoading(false);
    } catch (err) {
      setErr(err.response.status);
      setLoading(false);
    }

  }
  return (
    <div>
      <Header />
      <Search searchPin={searchPin} pinRef={pinRef} />
      {loading ? <div className="loader"></div> :
        err == 404 ? <div className='errMessage'>Please provide a correct pincode!</div> : <Details data={data} setData={setData} pinRef={pinRef} />}
    </div>
  )
}

export default App
