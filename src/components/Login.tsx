import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'
import { useForm, SubmitHandler } from 'react-hook-form';

import { fetchLoginInfo } from '../redux/reducers/loginInfo'
import { NavLink, useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AiOutlineLogin } from 'react-icons/ai';
import LoginIcon from '@mui/icons-material/Login';
import { LoginData } from '../common/Common';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})
const Login = () => {
  const navigate = useNavigate()
  const [accessToken, setAccessToken] = useState("")
  const { access_token,isLogin } = useAppSelector(state => state.loginReducer)
  useEffect(() => {
    if (access_token) {
      localStorage.setItem("accessToken", access_token)
      if (localStorage.getItem('accessToken')) {
        navigate('/profile')
      }
      setAccessToken(access_token)
    }
  }, [access_token])
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginData>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<LoginData> = data => {
    console.log(data)
    dispatch(fetchLoginInfo(data))
  };
  return (
    <>
      {/* <Box display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center" margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px lightgray'} sx={{":hover":{boxShadow:"10px 10px 10px lightgray",},}}>
          <Typography variant="h2" textAlign="center" padding={3}> {isSignup?'SignUp':'Login'}</Typography>
          {isSignup && <TextField type="text" variant="outlined" placeholder="Name" margin="normal"  value={logindata.name} onChange={(e) => getData('name', e)} />}
          <TextField type="email" variant="outlined" placeholder="Email" margin="normal"  value={logindata.email} onChange={(e) => getData('email', e)} />
          <TextField  type="password" variant="outlined"  placeholder="Password" margin="normal"  value={logindata.password} onChange={(e) => getData('password', e)}  />
          {isSignup && <input type="file" id="myFile" name="filename"  onChange={(e) => {e.target.files && setFileData(e.target.files[0])}} style={{marginTop:"10px"}}/> }
          <Button endIcon={isSignup?<LoginIcon/>:<AiOutlineLogin/>} sx={{marginTop:3,borderRadius:3,fill:'white'}} variant="contained" color="warning"  onClick={loginData}>  {isSignup?'Signup':'Login'}</Button>
          <Button sx={{marginTop:3,borderRadius:3}} onClick={()=>{setIsSignUp(!isSignup)}}> {isSignup?'change to Login':'change to signup'}</Button>
        </Box> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center" margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px lightgray'} sx={{ ":hover": { boxShadow: "10px 10px 10px lightgray", }, }}>
          <Typography variant="h2" textAlign="center" padding={3}>Login</Typography>
          <TextField type="email" variant="outlined" placeholder="Email" margin="normal"  {...register("email")} />
          <span className="errorwarnings">{errors.email?.message}</span>
          <TextField type="password" variant="outlined" placeholder="Password" margin="normal"  {...register("password")} />
          <span className="errorwarnings">{errors.password?.message}</span>
          <Button sx={{ marginTop: 3, borderRadius: 3, fill: 'white' }} variant="contained" color="warning" type="submit">Login<LoginIcon /></Button>
          <br/>
          <span className="errorwarnings">{!isLogin&& "Login Failed.Try again"}</span>
          <Button sx={{ marginTop: 3, borderRadius: 3,fontSize:10 }}><NavLink to="/update">forgot password?</NavLink></Button>
        </Box>
      </form>
    </>
  )
}
export default Login


