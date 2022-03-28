import React, { useEffect, useState } from 'react'
import  "../styles/app.css"
import UserItem from './UserItem'
import Service from '../API/Service'
import Loader from './UI/loader/Loader'
import BasicBytton from './UI/button/BasicBytton'
import SidePanel from './UI/sidePanel/SidePanel'

const UserList = () => {
   const[users, setUsers] = useState([]);
   const[sortedField, setSortedField] = useState(null)
    
    useEffect(() => {
        const fetchData = async() => {
            const response = await Service.getUsers();
            setUsers(response)
        }
        fetchData()
       
    }, [])
   
    
       let  sortedUsers =[...users];
       if(sortedField!== null) {
           switch(sortedField){
            case 'name':
            sortedUsers.sort((a,b) => {
                if(a[sortedField] < b[sortedField]) {
                    return -1;
                }
                if(a[sortedField]>b[sortedField]){
                    return 1;
                }
                return 0;
            })
            
            
            case "company":
                sortedUsers.sort((a,b) => {
                    if(a[sortedField].name < b[sortedField].name) {
                        return -1;
                    }
                    if(a[sortedField].name>b[sortedField].name){
                        return 1;
                    }
                    return 0;
                })
                
           }
           
       
        
       }
    
    
    
    
    if(!users.length){
        return(
            <div>
               <Loader/>
            </div>
            
        )
    }
   
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