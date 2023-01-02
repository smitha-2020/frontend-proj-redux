import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/reduxHook'


const Profile = () => {
  const authentication = useAppSelector(state => state.auhtReducer)
  if(authentication){
    console.log(authentication)
    return (
      <div>Profile</div>
    )
  }else{
    return(<>
        Not Logged in
    </>)
  }
  
}

export default Profile