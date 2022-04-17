import React, { useEffect, useState } from 'react'
import Service from '../API/Service';
import SidePanel from '../components/UI/sidePanel/SidePanel';
import UserList from '../components/UserList';
import { UseSortedUsers } from '../hooks/useUsers';

const Users = () => {
    const[sortedField, setSortedField] = useState(null)
    const[users, setUser] = useState("");
   
    useEffect(() => {
        const fetchData = async() => {
            const response = await Service.getUsers();
            const responseImg = await Service.getImg();
            
            for(let i = 0; i<response.length; i++)
            {
                response[i].thumbnailUrl = responseImg[i].thumbnailUrl;
            }
            setUser(response)
        }
        fetchData()
    }, [])

    const sortedUsers = UseSortedUsers(users, sortedField);
    return (
    <>
    {users 
    ? <div className='rex'>
    <SidePanel
      setter={setSortedField}
       sort1={"address"}
       sort2={"company"}
       />
       <UserList
       users={sortedUsers}/>
    </div>
    : <div>Загрузка...</div>}  
    </>
  )
}

export default Users