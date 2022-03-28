import React, { useEffect, useState } from 'react'
import  "../styles/app.css"
import UserItem from './UserItem'
import Service from '../API/Service'
import Loader from './UI/loader/Loader'
import BasicBytton from './UI/button/BasicBytton'
import SidePanel from './UI/sidePanel/SidePanel'
import { UseSortedUsers } from '../hooks/useUsers'

const UserList = ({users}) => {
   
    
  return (
           <div  className='usersList'>
        <h1>Список пользователей</h1>
        {users.map(item =>
            <UserItem
                key = {item.id}
                className="user"
                item ={item} 
            />   
              )}
    </div>
      
  )
}

export default UserList