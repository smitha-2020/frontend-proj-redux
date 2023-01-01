import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'
import { fetchLoginInfo, setData } from '../redux/reducers/loginInfo'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from "@mui/material";
import styled from '@emotion/styled';


const Login = () => {
  // const DivBox = styled(Box)({
  //   display: "flex",
  //   flexDirection: "row",
  //   width: "100vw",
  //   height: "100vh",
  //   alignItems: "center",
  //   justifyContent: "center",

  // });
  // const CentreredBox = styled(Box)({
  //   display: "flex",
  //   flexDirection: "row",
  //   width: "500px",
  //   height: "500px",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#f2f2f2",
  //   justifyItems:"center",
  // });

  // const MainBox = styled(Box)({
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "10px",
  //   flexWrap: "wrap",
  //   width: "500px",
  // });
  // const RowBox = styled(Box)({
  //   display: "flex",
  //   flexDirection: "row",
  //   gap: "30px",
  //   flexWrap: "wrap",
  //   width: "400px",
  //   justifyContent: "center"
  // });
  // const SubmitButton = styled(Button)({
  //   backgroundColor: "lightgray",
  //   color: "white"
  // });
  const navigate = useNavigate()

  const [accessToken, setAccessToken] = useState("")
  const [logindata, setLoginData] = useState({
    email: "",
    password: ""
  });

  const { access_token } = useAppSelector(state => state.loginReducer)
  useEffect(() => {
    if (access_token) {
      localStorage.setItem("accessToken", access_token)

      if(localStorage.getItem('accessToken')){
        navigate('/')
      }
      setAccessToken(access_token)
    }
  }, [access_token])

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
{/*       
      <DivBox> 
      <CentreredBox>
        <MainBox>
          <RowBox>Login</RowBox>
          <RowBox>
            <Box> <span>Username</span></Box>
            <Box> <input type="text" value={logindata.email} onChange={(e) => getData('email', e)} name="email" /></Box>
          </RowBox>
          <RowBox>
            <Box> <span>Password</span></Box>
            <Box> <input type="text" value={logindata.password} onChange={(e) => getData('password', e)} name="password" /></Box>
          </RowBox>
          <RowBox>
            <SubmitButton onClick={loginData}>Login</SubmitButton>
          </RowBox>
        </MainBox>
      </CentreredBox>
      </DivBox>  */}
    </>
  )
}

export default Login


