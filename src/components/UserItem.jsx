import React from 'react'
import {useNavigate } from 'react-router-dom'
import BasicBytton from './UI/button/BasicBytton';

const UserItem = ({name, address, company, thumbnailUrl,id}) => {
    const router =useNavigate();
  return (
    <div className='user'>
        <div className='user__img'>
            <img src= {thumbnailUrl}></img>
           </div>
        <ul> 
            <li> ФИО: <span>{name}</span>  </li>
            <li> Город: <span>{address.city}</span>  </li>
            <li> Компания: <span>{company.name}</span>  </li>
        </ul>
        <div className='user__button'>
            <BasicBytton
            onClick={() => router(`/profile/${id}`)}>Подробнее</BasicBytton>
             </div>
    </div>
  )
}



export default UserItem