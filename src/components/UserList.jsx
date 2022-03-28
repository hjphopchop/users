import React, { useEffect, useState } from 'react'
import  "../styles/app.css"
import UserItem from './UserItem'
import Service from '../API/Service'
import Loader from './UI/loader/Loader'
import BasicBytton from './UI/button/BasicBytton'
import SidePanel from './UI/sidePanel/SidePanel'
import { UseSortedUsers } from '../hooks/useUsers'

const UserList = () => {
   const[users, setUsers] = useState([]);
   const[sortedField, setSortedField] = useState(null)
   const sortedUsers = UseSortedUsers(users, sortedField);
    
    useEffect(() => {
        const fetchData = async() => {
            const response = await Service.getUsers();
            setUsers(response)
        }
        fetchData()
       
    }, [])
    
  return (
      <div className='rex'>
              <SidePanel
             setter={setSortedField}
              sort1={"name"}
              sort2={"company"}
             
              />
          
           <div  className='usersList'>
        <h1>Список пользователей</h1>
        {sortedUsers.map(item =>
            <UserItem
                key = {item.id}
                className="user"
                item ={item} 
            />   
              )}
    </div>
      </div>
  )
}

export default UserList