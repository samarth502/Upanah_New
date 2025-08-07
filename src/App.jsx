import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigations from './Customer/Components/Navigations'
import HomePages from './Customer/Pages/HomePages'
import Product from './Customer/Components/Product/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigations/>
    <div>
      {/* <HomePages/> */}
      
      <Product/>
    </div>
    </>
  )
}

export default App
