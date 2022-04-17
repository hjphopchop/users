import React from 'react'
import  "../styles/app.css"
import UserItem from './UserItem'

const UserList = ({users}) => {
  return (
    <div  className='usersList'>
    <h1 className='user__title'>Список пользователей</h1>
    {users.map(item =>
      <UserItem
        key = {item.id}
        className="user"
        {...item} 
      />   
              )}
    </div> 
  )
}

export default UserList