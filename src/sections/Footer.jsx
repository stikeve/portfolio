import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Using react-icons library

const Footer = () => {
    return (
        <section className="c-space pt-6 pb-10 text-slate-50">
            <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
                <p className="mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Ashutosh gautam . All rights reserved.
                </p>
                
                <div className="flex space-x-4">
                    <a 
                        href="https://www.linkedin.com/in/ashgautamse/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a 
                        href="https://github.com/Stikeve" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;