import './App.css';
import Menu from './Components/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { SET_API_DATA } from './Reducers/types';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Menu2 from './Components/Menu2';
import Menu3 from './Components/Menu3';
function App() {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [style, setStyle] = useState(1)
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

  const switchStyle = ()=>{
    if(style == 1){
      setStyle(2)
    }
    if(style == 2){
      setStyle(3)
    }
    if(style == 3){
      setStyle(1)
    }
  }
  return (
    <div className="App">
      <Navbar />
      <div style={{ height: "40vh" }}>
        <div onClick={switchStyle} className='switchButton'>Switch Style</div>
      </div>
      <div className="singleMenu">
        {!loading ?
          data.map((element) => {
            let component = null
            if(style ==1) component = <Menu element={element} /> 
            if(style ==2) component = <Menu2 element={element} /> 
            if(style ==3) component = <Menu3 element={element} /> 
            return component 
          }) : <Skeleton style={{height:"20vh",width:"50vw",margin:'10px'}} count={2}/>}
      </div>
    </div>
  );
}

export default App;
