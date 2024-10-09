import Navbar from "./components/Navbar"  
import Home from './pages/Home' 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from './pages/About' 
import Works from './pages/Works'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Work from "./pages/Work"
import NotFound from "./pages/NotFound"

const App = () => {

  return (
    <div className="mx-2 md:mx-5 lg:mx-16">
     <Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/work" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="work/:id" element={<Work/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  )
}

export default App