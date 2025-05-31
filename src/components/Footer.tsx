import logo from '../images/Logo.png'
import { Link } from 'react-router-dom'
import { RiGithubLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {

const navlinks = [
         {name: "Work", url: "/work"}, {name: "About", url: "/about"}, 
         {name: "Contact", url: "/contact"}
           ]

 const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
 }

    return (
        <footer className="mt-20 lg:mt-28 bg-[#EDEDED] px-2 md:px-6 lg:px-16 py-11 rounded-t-xl lg:rounded-t-3xl">
        
        <div className="flex flex-col lg:flex-row items-center gap-y-6 lg:justify-around">
         <img src={logo} className="w-14"/> 

        <div className="space-x-6">
        {navlinks.map((link) => (
        <Link onClick={scrollToTop} to={link.url} className="lg:text-lg font-shantell hover:font-bold">{link.name}</Link>
        ))}
        </div>
        </div>

        {/* social media icons  */}
        <div className="flex flex-row gap-3 items-center justify-center mt-9"> 
        <a href="https://x.com/Munashe8" className="bg-[#D4D4D4] p-2 rounded-full"><FaXTwitter size={22} color="#525252"/></a>
        <a href="https://github.com/munashex" className="bg-[#D4D4D4] p-2 rounded-full"><RiGithubLine size={22} color="#525252"/></a>
        <a href="https://www.linkedin.com/in/munashe-mugonda-99676a210/" className="bg-[#D4D4D4] p-2 rounded-full"><IoLogoLinkedin size={22} color="#525252"/></a>
        </div> 


        <h1 className="mt-11 mb-2 text-center font-shantell">Designed & Built by Munashe Mugonda</h1>

        </footer>
    )
}

export default Footer