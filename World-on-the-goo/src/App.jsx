import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'

const fetchResponse=async()=>{
  const response=await fetch('https://openapi.programming-hero.com/api/all')
  return response.json();
}
const response=fetchResponse();
function App() {

  return (
    <>
      
      <Suspense fallback={<h1>Country Data loading...</h1>}>
        <Countries response={response}></Countries>
      </Suspense>
    </>
  )
}

export default App
