import { FaBars } from "react-icons/fa6"
import { MdClose } from "react-icons/md"; 
import Logo from '../images/Logo.png'
import { useState } from "react"; 
import {Link} from 'react-router-dom'
import { RiGithubLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6"; 
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {

const [openNav, setOpenNav] = useState(false) 
const toggleNav = () => setOpenNav(!openNav)

const navlinks = [
    {name: "Work", url: "/work"}, {name: "About", url: "/about"}, 
    {name: "Experience", url: "/experience"}, {name: "Contact", url: "/contact"}
     ]

    return (
        <div className="bg-[#EDEDED] rounded-xl"> 
          {/* navbar on small & medium screens */} 
          <div className="mt-3 p-2 rounded-xl">
          <div className="flex lg:hidden items-center justify-between">
            <Link to="/">
            <img src={Logo} alt="munashedev" className="w-12 md:w-14"/>
            </Link> 

            <button onClick={toggleNav}> 
             {openNav ?  
             <MdClose size={30} color="#525252"/> : 
             <FaBars size={30} color="#525252"/> }
            </button>
          </div> 

           <div className={`${openNav ? 'flex flex-col lg:hidden animate-fade-down gap-16 h-screen' : 'hidden'}`}>
             {/* navLinks on small & md screens */}
             <div className="mt-11 flex flex-col lg:hidden justify-center items-center gap-3">
            {navlinks.map((link) => (
                <Link onClick={toggleNav} key={link.name} to={link.url} className="text-[#2b2a2a] text-xl"> 
                 {link.name}
                </Link>
            ))}
            </div>

            {/* social media icons  */}
            <div className="flex flex-row gap-3 items-center justify-center"> 
              <a href="https://x.com/Munashe8" className="bg-[#D4D4D4] p-2 rounded-full"><FaXTwitter size={22} color="#525252"/></a>
              <a href="https://github.com/munashex" className="bg-[#D4D4D4] p-2 rounded-full"><RiGithubLine size={22} color="#525252"/></a>
              <a href="https://www.linkedin.com/in/munashe-madhuna-99676a210/" className="bg-[#D4D4D4] p-2 rounded-full"><IoLogoLinkedin size={22} color="#525252"/></a>
            </div> 

            <Link to="/contact" onClick={toggleNav} className="bg-black w-1/2 mx-auto py-2  rounded-lg text-lg gap-2  text-white flex items-center justify-center">
            Lets Talk  <MdArrowOutward size={22}/>
            </Link>
           </div>
          </div>

          
           {/* navbar on lg screens  */} 
           <div className="hidden lg:flex flex-row p-2.5 justify-between items-center">

            <div className="flex flex-row gap-11 items-center">
            <Link to="/"> 
            <img src={Logo} alt="munashedev" className="w-14"/> 
            </Link> 

            <div className="flex flex-row gap-4">
            {navlinks.map((link) => (
                <Link  key={link.name} to={link.url} className="text-[#2b2a2a]  text-lg"> 
                 {link.name}
                </Link>
             ))}
            </div>
            </div> 
             

             <div className="flex flex-row gap-11 items-center">
              {/* social media icons  */}
            <div className="flex flex-row gap-3 items-center justify-center"> 
              <a href="https://x.com/Munashe8" className="bg-[#D4D4D4] p-2 rounded-full"><FaXTwitter size={22} color="#525252"/></a>
              <a href="https://github.com/munashex" className="bg-[#D4D4D4] p-2 rounded-full"><RiGithubLine size={22} color="#525252"/></a>
              <a href="https://www.linkedin.com/in/munashe-madhuna-99676a210/" className="bg-[#D4D4D4] p-2 rounded-full"><IoLogoLinkedin size={22} color="#525252"/></a>
            </div>  
               
            <Link to="/contact" onClick={toggleNav} className="bg-black px-4 py-2  rounded-lg text-lg gap-2  text-white flex items-center justify-center">
            Lets Talk  <MdArrowOutward size={22}/>
            </Link>
             </div>
           </div> 


        </div>
    )
}

export default Navbar