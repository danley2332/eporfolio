import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from "./pages/Portfolio.jsx"
import API from './pages/API.jsx'
import Projects from "./pages/Projects.jsx"
import Home from "./pages/Home.jsx"


function App() {
  return (
    <>
     <NavBar />
     <Routers>
      <Route path="/" element={<Home/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/API" element={<API/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
     </Routers>
     <Footer />
    </>
  );
}

export default App
