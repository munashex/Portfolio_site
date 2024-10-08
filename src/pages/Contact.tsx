

const Contact = () => {

    return (
        <div className="w-full h-screen">
            
            <div className="mt-20 lg:mt-28 space-y-5">
            <h1 className="text-5xl font-bold font-shantell md:text-7xl lg:text-9xl">Hello.</h1>
            <h1 className="text-lg lg:max-w-xl lg:text-xl">While I’m currently exploring new opportunities, my inbox is always open. Feel free to reach out!</h1>
             
             <div className="flex flex-col gap-1">
              <h1 className="inline-flex items-center gap-1 text-lg">
               Email: 
               <a href="mailto:munashemugondaa@gmail.com" className="underline  hover:font-bold">munashemugondaa@gmail.com</a>
              </h1>

              <h1 className="inline-flex items-center gap-1 text-lg">
                On the Internet: 
                <a href="https://x.com/Munashe8" className="underline  hover:font-bold">Twitter</a>
                <span>/</span>
                <a href="https://github.com/munashex" className="underline  hover:font-bold">Github</a>
                <span>/</span>
                <a href="https://www.linkedin.com/in/munashe-madhuna-99676a210/" className="underline  hover:font-bold">LinkedIn</a>
              </h1>
              
            </div>
            </div> 

        </div>
    )
}

export default Contact