import Navbar from "./components/Navbar"  
import Home from './pages/Home' 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from './pages/About' 
import Work from './pages/Work'
import Contact from './pages/Contact'

const App = () => {

  return (
    <div className="mx-2 md:mx-5 lg:mx-16">
     <Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App