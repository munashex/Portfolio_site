import React from 'react';
import { useParams } from "react-router-dom";
import { FaLink, FaGithub } from 'react-icons/fa';
import { works } from "../data/works";

const Work: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const findWorkWithId = works.find((work) => work.name === id);

  if (!findWorkWithId) {
    return <div className="mt-11 lg:mt-16 text-gray-800 text-center">Work not found</div>;
  }

  return (
    <div className="mt-11 lg:mt-16 text-gray-800 max-w-7xl px-2 md:px-4 lg:px-8 mx-auto">
      {/* top div */}
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-12 justify-between items-start mb-12">
        <div className="space-y-2 max-w-2xl">
          <h1 className="font-bold text-3xl lg:text-4xl text-gray-900 font-shantell">{findWorkWithId.name}</h1>
          <p className="text-lg lg:text-xl text-gray-600">{findWorkWithId.description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <LinkItem
            icon={<FaLink className="text-gray-800" size={20}/>}
            title="URL"
            href={findWorkWithId.url}
          />
          <LinkItem
            icon={<FaGithub className="text-gray-800" size={20}/>}
            title="Source Code"
            href={findWorkWithId.github}
          />
        </div>
      </div>

      {/* image section */}
      <div className="lg:max-w-7xl mx-auto w-full mt-11 lg:mt-16">
        <img src={findWorkWithId?.image} 
          className="w-full hidden md:block rounded-lg shadow-md"/>
        <img src={findWorkWithId?.smallImage}
          className="h-full md:hidden w-full object-cover  rounded-lg shadow-md"/>
      </div>

      {/* tech stack used */}
      <div className="mt-12">
        <h2 className="font-bold text-2xl lg:text-3xl mb-4 font-shantell">Technologies used</h2>
        
        <div className="flex flex-wrap gap-2">
          {findWorkWithId.stack.map((tech, index) => (
            <span key={index} className={`font-shantell ${
              index % 2 === 1 
                ? 'bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold' 
                : 'bg-green-100 text-green-800 rounded-full px-3 py-1 font-semibold'
            }`}> 
              {tech} 
            </span>
          ))}
        </div>
      </div>

      {/* description  */}
      <div className="mt-12 space-y-4">
        <p className="text-lg">{findWorkWithId?.description1}</p>
        <p className="text-lg">{findWorkWithId?.description2}</p>
      </div>

      <div className="mt-16  lg:mt-20 flex flex-col items-center justify-center gap-4">
       <h1 className="text-2xl font-shantell">Check it out.</h1>
       <a href={findWorkWithId.url} className="bg-[#1A1818] scale-105 hover:scale-110 transition delay-100 duration-200 ease-in-out text-[#ECE7E1] text-lg p-2 px-4 rounded-full">{findWorkWithId?.url}</a>
      </div>
    </div>
  );
};

interface LinkItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ icon, title, href }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <div>
      <h2 className="font-semibold text-gray-500 font-shantell">{title}</h2>
      <a
        className="text-gray-800 font-shantell hover:text-blue-600 transition-colors duration-200 underline"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {href}
      </a>
    </div>
  </div>
);

export default Work;