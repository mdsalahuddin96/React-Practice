import Users from './Users'
import './App.css'
import { Suspense } from 'react'
const fetchUser=async()=>{
  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

function App() {
  const userPromise=fetchUser()
  return(
    <>
      <h1>All Users Details</h1>
      <Suspense fallback={<h2>User Data loading...</h2>}>
        <Users userPromise={userPromise}></Users>
      </Suspense>
      
    </>
  )
}

export default App
