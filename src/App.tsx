

import Login from './components/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import Header from './components/Header'
import  NOTFOUND  from './Pages/NOTFOUND'
import { useAppDispatch, useAppSelector } from './hooks/reduxHook'
import { useEffect } from 'react'
import { fetchAllProducts } from './redux/reducers/ProductReducers'
import { fetchAllCategories } from './redux/reducers/CategoryReducers'
import Register from './Pages/Register'
import { fetchSession } from './redux/reducers/authReducer'

const App = () => {
  // const products = useAppSelector(state => state.productReducer)
  const authentication = useAppSelector(state => state.auhtReducer)
  const dispatch = useAppDispatch();
  //dispatch(fetchAllProducts())
  useEffect(() => {
    dispatch(fetchAllProducts())
    dispatch(fetchAllCategories())
    const userJson = localStorage.getItem('accessToken')!;
    // const data = userJson !== null ? userJson: null;
    if(!userJson){
     console.log("Authentication Failed")
    
    }else{
      dispatch(fetchSession(userJson))
      console.log(authentication)
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="*" element={<NOTFOUND/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </>
  )


}

export default App