
import { Suspense } from 'react'
import Countries from '../components/Countries'
import './App.css'
// import './components/country.css'

const CountriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())
function App() {

  return (
    <>
      <h1>React World on the go ....</h1>

      <Suspense fallback={<h1>dara khankir pola ....</h1>}>
        <Countries CountriesPromise={CountriesPromise}></Countries>

      </Suspense>

    </>
  )
}

export default App



