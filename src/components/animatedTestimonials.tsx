import { animatedTestimonals } from "../data/testimonials"
import { useState } from "react"

type TabsTypes = 'Sarah Baker' | 'Linda Wilson' | 'Emily K' | 'Emily Johnson' | 'Peter Thompson'

const AnimatedTestimonials = () => {
  const [tab, setTab] = useState<TabsTypes>('Sarah Baker')  
  const findActiveTab = animatedTestimonals.find((person) => person.name === tab)

  return (
    <div className="">
      <h1 className="text-3xl font-bold lg:text-5xl text-center lg:text-start">Testimonials</h1> 

      <div className="mt-11 bg-[#EDEDED] rounded-3xl w-full">
        <div className="space-y-3 p-5"> 
          <h1 className="text-3xl max-w-4xl text-black font-semibold">{findActiveTab?.description}</h1> 
          <div>
            <h1 className="text-2xl font-semibold text-black">{findActiveTab?.name}</h1> 
            <h1 className="text-gray-800">{findActiveTab?.occupation}</h1>
          </div>
        </div> 
           
        <div className="mt-9 flex gap-1 w-full">
          {animatedTestimonals.map((testimonial) => (
            <div 
              key={testimonial.name}
              className={`h-full ${testimonial.name === tab ? 'w-10/12' : 'w-1/6 mix-blend-luminosity'} transition-all duration-300 ease-in-out`}
              onMouseEnter={() => setTab(testimonial.name as TabsTypes)}
            > 
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className={`w-full h-96 object-cover rounded-3xl cursor-pointer ${
                  testimonial.name === tab ? 'object-cover' : 'object-cover object-center'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedTestimonials