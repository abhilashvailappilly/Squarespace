import { useState } from 'react'
import DraggableComponent from './Components/Dragabble'
import './App.css'
import Main from './Pages/Home/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoute from './Routes/UserRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Main/> */}
     <BrowserRouter>
      <Routes>
        <Route path='/*' element = {<UserRoute/>} />
        <Route path='*' element = {<>not found</>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
