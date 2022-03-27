import React from 'react'

const UserItem = (props) => {
  return (
    <div className='user'>
        <ul> 
            <li> ФИО: <span>{props.item.name}</span>  </li>
            <li> Город: <span>{props.item.address.city}</span>  </li>
            <li> Компания: <span>{props.item.company.name}</span>  </li>
        </ul>
        <div>Подробнее </div>
    </div>
  )
}

export default UserItem