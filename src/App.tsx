
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
import { fetchAllProducts, fetchProductsByPagination } from './redux/reducers/ProductReducers'
import { fetchAllCategories } from './redux/reducers/CategoryReducers'
import Register from './Pages/Register'
import { fetchSession } from './redux/reducers/authReducer'
import UpdatePassword from './components/UpdatePassword'
import Footer from './components/Footer'


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
        <Header />
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
        </BrowserRouter>
      </div>
    </>
  )


}

export default App