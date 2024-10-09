import { BsDot } from "react-icons/bs"
import SelectedWork from "../components/SelectedWork"
import { works } from "../data/works"


const Works = () => {

    return (
        <div>
        {/* top div with little info about me  */}
        <div className="mt-11 lg:mt-16 flex flex-col justify-center items-center gap-y-5">
        <div className="bg-[#EDEDED] flex flex-row lg:inline-flex items-center  w-fit mx-auto   text-[#2b2a2a] lg:text-lg  rounded-full px-4">
                <span className="animate-pulse"><BsDot size={40} color="#3EBE5E"/></span> <span>Available for Work</span> 
        </div> 
        <h1 className="font-shantell text-3xl text-center md:text-4xl lg:text-5xl font-bold">My Premier Works</h1>
        <h1 className="text-center text-lg md:text-xl lg:max-w-xl">Creating and building strong and stylish web applications for over ten years and still going strong.</h1>
        <button className="bg-[#A8516E] scale-100 hover:scale-105 transition animate-ease-linear delay-150 duration-200 rounded-xl font-bold border py-2 px-6 text-white">Resume</button>
        </div>
        

        {/* selected section  */}
        <div className="mt-20 lg:mt-28">
             <div className="grid gap-x-5 gap-6 grid-cols-1 lg:grid-cols-2">
             {works.map((work) => (
              <SelectedWork 
              key={work.name} 
              work={work}
              />
             ))}
        </div>
        </div>

        </div>
    )
}

export default Works