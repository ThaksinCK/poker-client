import React, {useEffect, useState} from 'react'
import Navbar from './components/navbar'
import Table from './components/table'
import ButtonContainer from './components/buttonContainer'

function App(){

  const [backendData, setBackendData] = useState([{}])

  // function getData() {
  //   fetch("/test")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBackendData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }

  // useEffect(() => {
  //   const interval = setInterval(getData, 1000);

  //   // Clear the interval on component unmount or when the interval needs to be reset
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return(
    <div>
      <Navbar />
      <Table />
      <ButtonContainer />
    </div>
  )
}

export default App