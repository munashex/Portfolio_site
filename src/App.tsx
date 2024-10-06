import Navbar from "./components/Navbar"  
import Home from './pages/Home' 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <div className="mx-2 md:mx-5 lg:mx-16">
     <Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App