import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Profile from '../pages/Profile'
import Users from '../pages/Users'

const AppRouter = () => {
  return (
    
        <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='*' element={<Navigate to="/users" replace/>} />
            
                

            
        </Routes>
       
  )
}

export default AppRouter