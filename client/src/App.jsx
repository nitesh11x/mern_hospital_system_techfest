import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Home/Hero'
import Navbar from './components/common/Navbar'
import Login from './components/patient/Login'
import Register from './components/patient/Register'
import Dashboard from './components/patient/Dashboard'
import Profile from './components/patient/Profile'
import Doctors from './components/doctor/Doctors'
import Contact from './components/section/Contact'
import About from './components/section/About'
import Footer from './components/common/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>


          {/* patient routes  */}
          <Route path='/patient/login' element={<Login />}></Route>
          <Route path='/patient/register' element={<Register />}></Route>
          <Route path='/patient/dashboard' element={<Dashboard />}></Route>
          <Route path='/patient/me' element={<Profile />}></Route>

          {/* doctor routes  */}
          <Route path='/doctors/all' element={<Doctors />}></Route>

          {/* admin routes  */}


          {/* appointment routes  */}


          {/* reviews routes  */}


          {/*  routes  */}

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
