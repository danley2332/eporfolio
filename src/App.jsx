import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from './pages/Portfolio.jsx'
import API from './pages/API.jsx'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'



function App() {
  return (
    <>
     <Header />
     <NavBar />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/API" element={<API/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
     </Routes>
     
     
     
      
     
    </>
  )
}

export default App