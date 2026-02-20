import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Home/Hero'
import Navbar from './components/common/Navbar'
import Login from './components/patient/Login'
import Register from './components/patient/Register'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/patient/login' element={<Login />}></Route>
          <Route path='/patient/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
