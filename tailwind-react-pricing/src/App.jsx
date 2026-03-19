
import './App.css'
import PricingOptions from './components/pricingOptions/PricingOptions'
import Navbar from './components/header/Navbar';
import Hero from './components/header/Hero';
const pricingPromise=fetch('pricingdata.json').then(res=>res.json())
function App() {


  return (
    <>
      <header className='bg-gray-900'>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main className='bg-gray-900 text-white'>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </main>
    </>
  )
}

export default App
