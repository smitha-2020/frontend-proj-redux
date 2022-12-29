import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'
import { fetchLoginInfo } from '../redux/reducers/LoginInfo'


const Login = () => {
  const [logindata, setLoginData] = useState({
    email: "",
    password: ""
  });
  const products = useAppSelector(state => state.loginReducer)
  console.log(products)
  const dispatch = useAppDispatch();
  const getData = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoginData((prevVal) => ({ ...prevVal, [field]: e.target.value }));
  }
  const loginData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(fetchLoginInfo({
      email: logindata.email,
      password: logindata.password
    }))
  }
  return (
    <>
      <div>Login</div>
      <div>
        <span>Username</span>
        <input type="text" value={logindata.email} onChange={(e) => getData('email', e)} name="email" />
      </div>
      <div>
        <span>Password</span>
        <input type="text" value={logindata.password} onChange={(e) => getData('password', e)} name="password" />
      </div>
      <button onClick={loginData}>Login</button>
    </>
  )
}

export default Login
