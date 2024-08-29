import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button/button'
// import { Barra } from './components/Barra/Barra'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button></Button>
     {/* <Barra> </Barra> */}
    </>
  )
}

export default App
