import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './components/create'
import Edit from './components/edit'
import RecordList from './components/recordList'
import Login from './components/login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home' element={<RecordList/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  )
}

export default App