import React, {useEffect, useState} from 'react'
import Table from './components/table'
import ButtonContainer from './components/buttonContainer'

function App(){

  const [backendData, setBackendData] = useState([{}])

  // useEffect(()=>{
  //   fetch("/test").then(
  //     response => response.json()
  //   ).then(
  //     data =>{
  //       console.log(data)
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return(
    <div>
      <Table />
      <ButtonContainer />
    </div>
  )
}

export default App