import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import IndividualProduct from './Pages/IndividualProduct'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import Header from './components/Header'
import  NOTFOUND  from './Pages/NOTFOUND'
 

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<IndividualProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
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