import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const UserItem = (props) => {
    const router =useNavigate();
  return (
    <div className='user'>
        <div className='user__img'>
            <img src= {props.item.thumbnailUrl}></img>
           </div>
        <ul> 
            <li> ФИО: <span>{props.item.name}</span>  </li>
            <li> Город: <span>{props.item.address.city}</span>  </li>
            <li> Компания: <span>{props.item.company.name}</span>  </li>
        </ul>
        <div>
            <button
            onClick={() => router(`/profile/${props.item.id}`)}>Подробнее</button>
             </div>
    </div>
  )
}

export default UserItem