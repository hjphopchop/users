import React, { useEffect, useState } from 'react'
import  "../styles/app.css"
import UserItem from './UserItem'
import Service from '../API/Service'
import Loader from './UI/loader/Loader'

const UserList = () => {
   const[users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async() => {
            const response = await Service.getUsers();
            setUsers(response)
        }
        fetchData()
       
    }, [setUsers])
    
    if(!users.length){
        return(
            <div>
               <Loader/>
            </div>
            
        )
    }
   
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