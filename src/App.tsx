

import Login from './components/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import Header from './components/Header'
import NOTFOUND from './Pages/NOTFOUND'
import { useAppDispatch, useAppSelector } from './hooks/reduxHook'
import { useEffect, useState } from 'react'
//import { fetchAllProducts, fetchProductsByPagination } from './redux/reducers/ProductReducers'
import { fetchAllCategories } from './redux/reducers/CategoryReducers'
import Register from './Pages/Register'
import { fetchSession } from './redux/reducers/authReducer'
import UpdatePassword from './components/UpdatePassword'
import { createContext } from 'react'
import { ThemeContext } from '@emotion/react';
import Footer from './components/Footer'


const App = () => {
  const [theme, setTheme] = useState("light")
  const container = document.getElementById('root')!;
  type Context = {
    theme: string;
    toggleTheme: () => void;
  };
  const initialContext: Context = {
    theme: "light",
    toggleTheme: () => { setTheme("light") }
  }
  const ThemeCtx = createContext<Context>(initialContext);

  // const theme = createTheme({
  //   palette: {
  //     secondary: blue,
  //   },
  // });
  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"))
  }
  // const products = useAppSelector(state => state.productReducer)
  const authentication = useAppSelector(state => state.auhtReducer)
  const dispatch = useAppDispatch();
  //dispatch(fetchAllProducts())
  useEffect(() => {

    dispatch(fetchAllCategories())
    const userJson = localStorage.getItem('accessToken')!;
    // const data = userJson !== null ? userJson: null;
    if (!userJson) {
      //console.log("Authentication Failed")
    } else {
      dispatch(fetchSession(userJson))
    }
  }, []);
  // setTimeout(() => console.log('Initial timeout!'), 100000);

  return (
    <>
      <div>
        <BrowserRouter>
          <ThemeCtx.Provider value={{ theme, toggleTheme }}>
            <Header />
            {/* <Experiment/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="profile" element={<Profile />} />
              <Route path="/update" element={<UpdatePassword />} />
              <Route path="*" element={<NOTFOUND />} />
            </Routes>
            {/* <Footer /> */}
          </ThemeCtx.Provider>
        </BrowserRouter>
      </div>

      {/* <Login/> */}
    </>
  )


}

export default App