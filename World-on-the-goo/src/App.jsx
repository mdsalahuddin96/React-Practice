import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'
const response=fetch('https://openapi.programming-hero.com/api/all')
                    .then(res=>res.json())
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
