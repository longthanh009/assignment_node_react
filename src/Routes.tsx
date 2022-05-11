import { useEffect, useState } from 'react'
import './index.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LayoutWebsite from './pages/layouts/LayoutWebsite'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ShopPage from './pages/Shops/Index'
import DetailProduct from './pages/Shops/Detail'
import BlogsPage from './pages/Blogs'
import DetailBlog from './pages/Blogs/Detail'
import CartPage from './pages/Checkout/Cart'
import CheckoutPage from './pages/Checkout/Checkout'
import LayoutAdmin from './pages/layouts/LayoutAdmin'
import Dashboard from './pages/Admin/Dashboard'
import ListCate from './pages/Admin/Category/List'
import CreatCategory from './pages/Admin/Category/Created'
import UpdateCategory from './pages/Admin/Category/Update'
import ListProducts from './pages/Admin/Products/List'
import CreatProduct from './pages/Admin/Products/Creat'
import UpdateProduct from './pages/Admin/Products/Update'
import PrivateRouter from './components/PrivateRouter'
import PrivateCheckout from './components/PrivateCheckout'
import ListOrder from './pages/Admin/Order/List'
import DetailOrder from './pages/Admin/Order/Detail'

function RoutePage() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LayoutWebsite />}>
                    <Route index element={<ShopPage />} />
                    <Route path='/Shops'>
                        <Route index element={<ShopPage />} />
                        <Route path='product/:id' element={<DetailProduct />} />
                        <Route path=':id' element={<ShopPage />} />
                    </Route>
                    <Route path='/Blogs'>
                        <Route index element={<BlogsPage />} />
                        <Route path=':id' element={<DetailBlog />} />
                    </Route>
                    <Route path='/Cart' >
                        <Route index element={<CartPage />} />
                        <Route path='Checkout' element={<PrivateCheckout><CheckoutPage /></PrivateCheckout>} />
                    </Route>
                </Route>
                <Route path='admin' element={<PrivateRouter><LayoutAdmin /></PrivateRouter> }>
                    <Route index element={<Navigate to="Dashboard" />} />
                    <Route path='Dashboard' element={<Dashboard />} />
                    <Route path='categorys'>
                        <Route index element={<ListCate />} />
                        <Route path='create' element={<CreatCategory />} />
                        <Route path=':id/edit' element={<UpdateCategory />} />
                    </Route>
                    <Route path='products'>
                        <Route index element={<ListProducts />} />
                        <Route path='create' element={<CreatProduct />} />
                        <Route path=':id/edit' element={<UpdateProduct />} />
                    </Route>
                    <Route path='orders'>
                        <Route index element={<ListOrder />} />
                        <Route path=':id/detail' element={<DetailOrder />} />
                    </Route>
                </Route>
                <Route path='signin' element={<Signin />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </div>
    )
}

export default RoutePage
