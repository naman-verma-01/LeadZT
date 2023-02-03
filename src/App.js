import './App.css';
import Menu from './Components/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { SET_API_DATA } from './Reducers/types';
import React, { useState, useEffect } from 'react';


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
      <div className="singleMenu">
        {!loading ?
          data.map((element) => {
            return <Menu element={element} />
          }) : <>loading...</>}
      </div>
    </div>
  );
}

export default App;
