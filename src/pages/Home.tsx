import { BsDot } from "react-icons/bs" 
import aboutMeImage from '../images/aboutMe.avif'
import { RiGithubLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6"; 
import SelectedWork from "../components/SelectedWork";
import {works} from '../data/works'
import AnimatedTestimonials from "../components/animatedTestimonials";
import Testimonals from "../components/Testimonials";

const Home = () => {

    return (
        <div> 
          
          {/* a little about me */}
          <div className="flex flex-col lg:flex-row gap-x-7 lg:justify-center lg:items-center">
            <div className="mt-16 lg:mt-28">
              <div className="bg-[#EDEDED] flex flex-row lg:inline-flex items-center  w-fit mx-auto   text-[#2b2a2a] lg:text-lg  rounded-full px-4">
                <span className="animate-pulse"><BsDot size={40} color="#3EBE5E"/></span> <span>Available for Work</span> 
             </div> 

             <div className="space-y-4 mt-9 lg:max-w-4xl">
                <h1 className="text-3xl md:text-4xl lg:text-7xl font-shantell text-center lg:text-start lg:max-w-3xl">I'm Munashe Mugonda. I Code * Create * Innovate.</h1>
                 <h1 className="text-lg text-center lg:text-xl lg:max-w-2xl lg:text-start">Empowering Ideas Through End-to-End Development Expertise and Seamless User Interfaces</h1>
                  <div className="flex flex-row justify-center lg:justify-start gap-4">
                  <button className="border rounded-xl  border-black py-2 px-4  hover:bg-black hover:text-white scale-100 hover:scale-105 transition animate-ease-linear delay-300 duration-300">Browse Works</button>
                  <button className="bg-[#A8516E] scale-100 hover:scale-105 transition animate-ease-linear delay-150 duration-200 rounded-xl font-bold border py-2 px-6 text-white">Resume</button>
                  </div>
             </div>

            </div>

            <div className="hidden lg:flex">
            <div className="border-4 relative bg-[#EDEDED] border-[#A8516E] rounded-full">
               <img src={aboutMeImage} alt="munashedev"/>
            <div className="flex absolute -bottom-5 bg-black mx-auto w-fit p-2 bg-gradient-to-r from-[#A8516E] to-black rounded-full right-0  left-0 flex-row gap-3 items-center justify-center"> 
              <a href="https://x.com/Munashe8" className="bg-white p-2 rounded-full"><FaXTwitter size={29} color="#525252"/></a>
              <a href="https://github.com/munashex" className="bg-white p-2 rounded-full"><RiGithubLine size={29} color="#525252"/></a>
              <a href="https://www.linkedin.com/in/munashe-madhuna-99676a210/" className="bg-white p-2 rounded-full"><IoLogoLinkedin size={29} color="#525252"/></a>
            </div>  
            </div> 
            </div>
          </div> 
          

          {/* selected section  */}
           <div className="mt-20 lg:mt-28">
            <h1 className="text-center   text-3xl  lg:text-5xl font-bold">Selected Works</h1>
           
             <div className="mt-11 lg:mt-16 grid gap-x-5 gap-6 grid-cols-1 lg:grid-cols-2">
             {works.slice(0, 4).map((work) => (
              <SelectedWork 
              key={work.name} 
              work={work}
              />
             ))}
             </div>
           </div>

           <div className="mt-11 flex justify-center">
            <button className="text-lg border-2 rounded-full border-gray-400 p-2 px-6 hover:bg-[#A8516E] hover:border-[#A8516E] hover:text-white transition duration-300 delay-300 ease-in-out">See All Works</button>
           </div>

           {/* animated testimonials  section on lg screen*/}
           <div className="mt-28 hidden lg:grid">
            <AnimatedTestimonials/>
           </div> 

           {/* regular testimonals on sm & md sceens */} 
           <div className="mt-20 lg:hidden">
           <Testimonals/>
           </div>
        </div>
    )
}

export default Home