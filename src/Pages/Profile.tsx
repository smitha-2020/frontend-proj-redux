import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/reduxHook'


const Profile = () => {
  const authentication = useAppSelector(state => state.auhtReducer)
  useEffect(() => {
    console.log("data refreshed");
  }, [authentication])
  if (authentication) {
    console.log(authentication)
    return (
      <div><a href="#">Logout</a>Profile</div>

    )
  } else {
    return (<>
      Not Logged in
    </>)
  }

}

export default Profile