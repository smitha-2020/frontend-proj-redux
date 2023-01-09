
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks/reduxHook'

import Login from './components/Login'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import Header from './components/Header'
import NOTFOUND from './Pages/NOTFOUND'
import { fetchAllProducts } from './redux/reducers/ProductReducers'
import { fetchAllCategories } from './redux/reducers/CategoryReducers'
import Register from './Pages/Register'
import { fetchSession } from './redux/reducers/authReducer'
import Footer from './components/Footer'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#d6cbd3',
      contrastText: 'white'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    }
  }
})
const App = () => {
  const authentication = useAppSelector(state => state.loginReducer.user)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts())
    dispatch(fetchAllCategories())
    const userJson = localStorage.getItem('access_token')!;
    if (!userJson) {
      //console.log("Authentication Failed")
    } else {
      dispatch(fetchSession(userJson))
    }
  }, []);

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NOTFOUND />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App