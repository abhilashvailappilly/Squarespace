import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Pages/Home/Main'
import Menu from '../Pages/Menu/Menu'

const UserRoute = () => {
  return (
  <Routes>
    {/* <Route path='' element ={} >

    </Route> */}
    <Route path='/*' element ={<Main/>} />
    <Route path='/menu/*' element ={<Menu/>} />
    {/* <Route path='' element ={} >
        
    </Route> */}
  </Routes>
  )
}

export default UserRoute
