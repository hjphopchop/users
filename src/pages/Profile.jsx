import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Service from '../API/Service';
import BasicInput from '../components/UI/basicInput/BasicInput';
import BasicBytton from '../components/UI/button/BasicBytton';
import UserForm from '../components/UserForm';

const Profile = (props) => {
    const params = useParams();
    const [user, setUser] = useState({});
    

    useEffect(() => {
        const fetchData = async() => {
            const response = await Service.getUsersById(params.id);
            const responseImg = await Service.getImgById(params.id);
            response.thumbnailUrl = responseImg.thumbnailUrl
            
            setUser(response)
            ;
        }
        fetchData()
        
       
    }, [])

    
    
   

  return (
    <div>Вы открыли страницу пользователя {params.id}
    
        
       
        <img  src={user.thumbnailUrl}></img>
        <UserForm props={user}/>
        </div>
  )
}

export default Profile