import './App.css'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Reg from './pages/Reg/Reg'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Auth/>} />
      <Route path='/reg' element={<Reg/>} />
      <Route path='/home' element={<Home/>} />
     </Routes> 
    </>
  )
}

export default App