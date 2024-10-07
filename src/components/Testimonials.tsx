import {animatedTestimonals} from '../data/testimonials'
import { IoStar } from "react-icons/io5";
import { useState } from 'react';

type testimonalTab = 'Sarah Baker' | 'Linda Wilson' | 'Emily K' | 'Emily Johnson' | 'Peter Thompson'

const Testimonals = () => {
 const [tab, setTab]  = useState<testimonalTab>('Sarah Baker')  

 const toggleTab = (name: testimonalTab) => {
    setTab(name)
 }

 const findActiveData = animatedTestimonals.find((testmonial) => testmonial.name === tab)
 
    return (
        <div>
          <h1 className="text-3xl font-bold lg:text-5xl text-center lg:text-start">Testimonials</h1>  
             
            <div className="bg-[#EDEDED] py-7 lg:p-16 mt-5 rounded-xl flex flex-col gap-9 items-center">
              <span className="inline-flex items-center gap-1">
                {[...Array(5).fill(<IoStar size={25} color="#A8516E"/>)]} 
                </span> 

                <h1 className="text-center text-lg font-semibold lg:max-w-4xl lg:text-xl">{findActiveData?.description}</h1>
                
                <div className="flex flex-col items-center">
                    <h1 className="font-semibold text-lg">{findActiveData?.name}</h1>
                    <h1 className="text-gray-700">{findActiveData?.occupation}</h1>
                </div>


                <div className="flex flex-row gap-x-1 items-center">
                    {animatedTestimonals.map((testimonal) => (
                    <div key={testimonal.name}>  
                    <button  onClick={() => toggleTab(testimonal.name as testimonalTab)}>
                    <img src={testimonal.image}
                     className={`rounded-full object-cover oject-cover ${testimonal.name === tab ? 'w-14 h-14' : 'w-10 h-10'}`}/>
                     </button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonals