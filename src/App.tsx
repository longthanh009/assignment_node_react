import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LayoutWebsite from './pages/layouts/LayoutWebsite'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ShopPage from './pages/Shops'
import DetailProduct from './pages/Shops/Detail'
import BlogsPage from './pages/Blogs'
import DetailBlog from './pages/Blogs/Detail'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path='/Shops'>
            <Route index element={<ShopPage />} />
            <Route path=':id' element={<DetailProduct/>}/>
          </Route>
          <Route path='/Blogs'>
            <Route index element={<BlogsPage />} />
            <Route path=':id' element={<DetailBlog/>}/>
          </Route>
        </Route>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
