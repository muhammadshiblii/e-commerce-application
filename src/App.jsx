import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Adminlogin from './Components/Admin/AdminLogin/Adminlogin'
import Index from './Components/Body/Index'
import AdminHome from './Components/Admin/AdminHome/Adminhome'
import Adminregister from './Components/Admin/AdminRegister/Adminregister'
import Adminfrgpwd from './Components/Admin/Adminforgotpwd/Adminforgotpwd'
import Category from './Components/Admin/Category/Category'
import Products from './Components/Admin/Products/Products'
import EditCategory from './Components/Admin/Editcategory/Editcategory'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      
    <Route path='/' Component={Index}/>
      <Route path='/Adminlogin' Component={Adminlogin}/>
      <Route path='/Adminhome' Component={AdminHome}/>
      <Route path='/Adminregister' Component={Adminregister}/>
      <Route path='/Adminfrgpwd' Component={Adminfrgpwd}/>
      <Route path='/Category' Component={Category}/>
      <Route path='/products' Component={Products}/>
      <Route path='/editcategory/:id' Component={EditCategory}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
