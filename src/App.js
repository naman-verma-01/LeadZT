import './App.css';
import Menu from './Components/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { SET_API_DATA } from './Reducers/types';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function App() {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const apiData = useSelector((state) => state.api_data.data);


  const getApiData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    response = await response.json()
    console.log("response", response)
    dispatch({ type: SET_API_DATA, payload: { data: response } });
    setData(response)
    setLoading(false)
  }
  useEffect(() => {
    console.log("apiData", apiData)
    if (apiData.length == 0 && data) {
      getApiData()
      setLoading(false)
    } else {
      setData(apiData)
      setLoading(false)
    }

  })
  return (
    <div className="App">
      <Navbar />
      <div style={{ height: "40vh" }}>
        <div className='switchButton'>Switch Style</div>
      </div>
      <div className="singleMenu">
        {!loading ?
          data.map((element) => {
            return <Menu element={element} />
          }) : <Skeleton style={{height:"20vh",width:"50vw",margin:'10px'}} count={2}/>}
      </div>
    </div>
  );
}

export default App;
