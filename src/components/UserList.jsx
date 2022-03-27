import React, { useEffect, useState } from 'react'
import  "../styles/app.css"
import UserItem from './UserItem'
import Service from '../API/Service'
import axios from 'axios'

const UserList = () => {
   const[users, setUsers] = useState([]);
    

    useEffect(() => {
        const fetchData = async() => {
            const response = await Service.getUsers();
            setUsers(response)
        }
        fetchData()
       
    }, [setUsers])
  
   
  return (
    <div  className='usersList'>
        
            {(users.length !==0) 
            ?
              users.map(item => (
                  <div  key = {item.id} className="user"> 
                    <ul>
                 
                 <li> ФИО: <span>{item.name}</span>  </li>
                 <li> Город: <span>{item.address.city}</span>  </li>
                 <li> Компания: <span>{item.company.name}</span>  </li>
                 </ul>
                 <div>Подробнее </div>
                  </div>
               
                
                
              ))
              
              :
              <h1>govno</h1>
}
        
    </div>
  )
}

export default UserList