import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'
import { useForm, SubmitHandler } from 'react-hook-form';

import { fetchLoginInfo } from '../redux/reducers/loginInfo'
import { NavLink, useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
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
    dispatch(fetchLoginInfo(data))
    console.log(isLogin)
  
  };
  return (
    <>
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
          <Button sx={{ marginTop: 3, borderRadius: 3,fontSize:10 }}><NavLink to="/register">Not Registered yet?click to register..</NavLink></Button>
          <Button sx={{ marginTop: 3, borderRadius: 3,fontSize:10 }}><NavLink to="/update">forgot password?</NavLink></Button>
        </Box>
      </form>
    </>
  )
}
export default Login


