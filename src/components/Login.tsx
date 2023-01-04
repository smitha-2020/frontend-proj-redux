import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'

import { fetchLoginInfo } from '../redux/reducers/loginInfo'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { AiOutlineLogin } from 'react-icons/ai';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  const navigate = useNavigate()
  const [isSignup, setIsSignUp] = useState(false)
  const [accessToken, setAccessToken] = useState("")
  const [logindata, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  });
  const { access_token } = useAppSelector(state => state.loginReducer)
  useEffect(() => {
    if (access_token) {
      localStorage.setItem("accessToken", access_token)

      if (localStorage.getItem('accessToken')) {
        navigate('/')
      }
      setAccessToken(access_token)
    }
  }, [access_token])
  const dispatch = useAppDispatch();
  const getData = (field: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setLoginData((prevVal) => ({ ...prevVal, [field]: e.target.value }));
  }
  const loginData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(!isSignup){
      if(logindata.email!=="" && logindata.password!==""){
        console.log(logindata)
        dispatch(fetchLoginInfo({
          email: logindata.email,
          password: logindata.password
        }))
      }
    }
  }
  return (
    <>
      <form> 
        <Box display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center" margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px lightgray'} sx={{":hover":{boxShadow:"10px 10px 10px lightgray",},}}>
          <Typography variant="h2" textAlign="center" padding={3}> {isSignup?'SignUp':'Login'}</Typography>
          {isSignup && <TextField type="text" variant="outlined" placeholder="name" margin="normal"  value={logindata.name} onChange={(e) => getData('name', e)} />}
          <TextField type="email" variant="outlined" placeholder="email" margin="normal"  value={logindata.email} onChange={(e) => getData('email', e)} />
          <TextField  type="password" variant="outlined"  placeholder="password" margin="normal"  value={logindata.password} onChange={(e) => getData('password', e)}  />
          {isSignup && <input type="file" id="myFile" name="filename"  value={logindata.avatar} onChange={(e) => getData('avatar', e)} style={{marginTop:"10px"}}/> }
          <Button endIcon={isSignup?<LoginIcon/>:<AiOutlineLogin/>} sx={{marginTop:3,borderRadius:3,fill:'white'}} variant="contained" color="warning"  onClick={loginData}>  {isSignup?'Signup':'Login'}</Button>
          <Button sx={{marginTop:3,borderRadius:3}} onClick={()=>{setIsSignUp(!isSignup)}}> {isSignup?'change to Login':'change to signup'}</Button>
        </Box>
      </form>
    </>
  )
}
export default Login


