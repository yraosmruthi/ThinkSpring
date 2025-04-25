import './App.css'
import './index.css'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Footer from './components/Footer'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Services from './pages/Services'
import PageNotFound from './pages/PageNotFound'

function App() {
  
  return (
    <div className='bg-zinc-900 text-white w-full h-screen overflow-y-scroll scrollbar-hide'>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/contact' element={<Contact />}/>
        <Route path ='/services' element={<Services />}/>
        <Route path ='/register' element={<Register/>}/>
        <Route path ='/login' element={<Login />}/>
        <Route path ='/logout' element={<Logout />}/>
        <Route path='*' element={<PageNotFound />}/>
      
      </Routes>

      <Footer />
                    
   </BrowserRouter>

   </div>
     
  )
}

export default App;
