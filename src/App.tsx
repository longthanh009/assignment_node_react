import { useEffect, useState } from 'react'
import './index.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LayoutWebsite from './pages/layouts/LayoutWebsite'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ShopPage from './pages/Shops'
import DetailProduct from './pages/Shops/Detail'
import BlogsPage from './pages/Blogs'
import DetailBlog from './pages/Blogs/Detail'
import CartPage from './pages/Checkout/Cart'
import CheckoutPage from './pages/Checkout/Checkout'
import LayoutAdmin from './pages/layouts/LayoutAdmin'
import Dashboard from './pages/Admin/Dashboard'
import axios from 'axios'
import ListCate from './pages/Admin/Category/List'
import CreatCategory from './pages/Admin/Category/Created'
import { useDispatch, useSelector } from 'react-redux'
import UpdateCategory from './pages/Admin/Category/Update'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path='/Shops'>
            <Route index element={<ShopPage />} />
            <Route path=':id' element={<DetailProduct />} />
          </Route>
          <Route path='/Blogs'>
            <Route index element={<BlogsPage />} />
            <Route path=':id' element={<DetailBlog />} />
          </Route>
          <Route path='/Cart' >
            <Route index element={<CartPage />} />
            <Route path='Checkout' element={<CheckoutPage />} />
          </Route>
        </Route>
        <Route path='admin' element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path='categorys'>
            <Route index element={<ListCate />} />
            <Route path='create' element={<CreatCategory />} />
            <Route path=':id/edit' element={<UpdateCategory />} />
          </Route>
        </Route>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
