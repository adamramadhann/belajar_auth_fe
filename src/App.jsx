import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FromRegister from './page/FromRegister'
import FromLogin from './page/FromLogin'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<FromRegister/>} />
      <Route path='/login' element={<FromLogin/>} />
    </Routes>
  )
}

export default App