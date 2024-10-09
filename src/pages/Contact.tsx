import React from 'react';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/Munashe8', icon: FaTwitter },
    { name: 'Github', href: 'https://github.com/munashex', icon: FaGithub },
    { name: 'LinkedIn', href: 'linkedin.com/in/munashe-madhuna-99676a210', icon: FaLinkedin },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl w-full px-4 py-8 space-y-8">
        <h1 className="text-5xl font-bold font-shantell md:text-7xl lg:text-9xl text-gray-800">
          Hello.
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
          While I'm currently exploring new opportunities, my inbox is always open. Feel free to reach out!
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="w-6 h-6 text-gray-600" />
            <a 
              href="mailto:munashemugondaa@gmail.com" 
              className="text-lg text-blue-600  hover:text-blue-800 transition-colors duration-300 underline"
            >
              munashemugondaa@gmail.com
            </a>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-lg text-gray-600">On the Internet:</span>
            {socialLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="underline">{link.name}</span>
                </a>
                {index < socialLinks.length - 1 && <span className="text-gray-400">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;