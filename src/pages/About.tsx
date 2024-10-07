import DualSlider from "../components/DualSlider";
import { RiGithubLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6"; 
import githubChart from '../images/gitChart.png'
import Testimonals from "../components/Testimonials"; 
import AnimatedTestimonials from "../components/animatedTestimonials";


const About = () => {
  return (
    <div className="mt-11 lg:mt-16">
      {/* Grid with experience and about me */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* First item of grid */}
        <div className="bg-[#EDEDED] p-4 space-y-3 rounded-xl lg:rounded-3xl">
            <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Munashe Mugonda</h1>
            <h1 className="text-lg">Seasoned web developer proficient in both client-side and server-side technologies, adept at creating comprehensive online solutions that seamlessly blend attractive user interfaces with powerful behind-the-scenes operations.</h1>
        </div>

        {/* Second item of grid */}
        <div className="bg-[#EDEDED] p-4 lg md:row-span-3 rounded-xl space-y-9 lg:rounded-3xl">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-center">My Stack</h1>
          <DualSlider />
        </div>

        {/* Third item of grid */}
        <div className="md:row-span-2">
         <div className="grid grid-cols-2 gap-x-2 justify-items-stretch">
           <div className="bg-[#EDEDED] p-4 rounded-xl lg:rounded-3xl py-9 space-y-1">
             <h1 className="text-[#8C8C8C] text-lg text-center">Experience</h1>
             <h1 className="font-bold text-2xl   text-center">4 Years</h1>
           </div> 
           <div className="bg-[#EDEDED] p-4 rounded-xl lg:rounded-3xl py-9 space-y-1">
           <h1 className="text-[#8C8C8C] text-lg text-center">Freelance</h1>
           <h1 className="font-bold text-2xl  text-center">30+ Projects</h1>
           </div>
         </div>
        </div>

        {/* Fourth item of grid */}
        <div className="md:row-span-2">
        <div className="grid grid-cols-3 gap-x-2 justify-items-stretch">
           <a href="https://x.com/Munashe8" className="bg-[#EDEDED] p-4 rounded-xl lg:rounded-3xl py-9 lg:py-14 flex justify-center items-center">
           <span><FaXTwitter size={48} color="#525252"/></span>
           </a> 
           <a href="https://github.com/munashex"  className="bg-[#EDEDED] rounded-xl lg:rounded-3xl py-9 lg:py-14 flex justify-center items-center">
           <span><RiGithubLine size={48} color="#525252"/></span>   
           </a>
           <a href="https://www.linkedin.com/in/munashe-madhuna-99676a210/" className="bg-[#EDEDED] rounded-xl lg:rounded-3xl py-9 lg:py-14 flex justify-center items-center">
           <span><IoLogoLinkedin size={48} color="#525252"/></span>
           </a>
         </div>
        </div>

        {/* Fifth item of grid */}
        <div className="bg-[#EDEDED] md:row-span-2 rounded-xl lg:rounded-3xl">
         <img src={githubChart} alt="githubchart" className="w-full h-fit"/>
        </div>

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
  );
};

export default About;
