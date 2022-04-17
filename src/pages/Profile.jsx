import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Service from '../API/Service';
import BasicBytton from '../components/UI/button/BasicBytton';
import UserForm from '../components/UserForm';
import cl from '../styles/Profile.module.css'

const Profile = () => {
    const params = useParams();
    const [user, setUser] = useState({});
    const defaultValues = {
      firstName: user.name,
      lastName: user.username,
      email: user.email,
      street: user.address?.street,
      city: user.address?.city,
      zipcode: user.address?.zipcode,
      phone: user.phone,
      website: user.website,
      comment: "",
    };

    useEffect(() => {
        const fetchData = async() => {
            const response = await Service.getUsersById(params.id);
            const responseImg = await Service.getImgById(params.id);
            response.thumbnailUrl = responseImg.thumbnailUrl
            setUser(response);
        }
        fetchData()
    }, [])

  return (
    <div>
      <Link to='/users' className={cl.link}> <BasicBytton> Назад</BasicBytton> </Link>
      <h1 className={cl.title}>Вы открыли страницу пользователя {params.id}</h1>
      <div className={cl.profile}>
      <img  src={user.thumbnailUrl}></img>
        <UserForm {...defaultValues}
        />
      </div>
    </div>
  )
}

export default Profile