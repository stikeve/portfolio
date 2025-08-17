import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [availabilityStatus, setAvailabilityStatus] = useState(true); 

  
  useEffect(() => {
    const interval = setInterval(() => {
      setAvailabilityStatus((prev) => !prev);
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, []);

const NavItems = () => {
  const [showExtras, setShowExtras] = useState(false);

  const mainLinks = navLinks.filter(link => link.id <= 5);
  const extraLinks = navLinks.filter(link => link.id > 5);

  return (
    <ul className="nav-ul flex items-center gap-4">
      {mainLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}

      {!showExtras && (
        <li className="nav-li">
          <button
            onClick={() => setShowExtras(true)}
            className="nav-li_a cursor-pointer text-white hover:text-neutral-400 transition"
            aria-label="Show more links"
          >
          <FaExternalLinkAlt className="inline-block mr-1" />
          </button>
        </li>
      )}

      {showExtras &&
        extraLinks.map(({ id, href, name }) => (
          <li
            key={id}
            className="nav-li transition-all duration-300 transform translate-x-0 opacity-100"
          >
            <a
              href={href}
              className="nav-li_a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </li>
        ))}
    </ul>
  );
};


  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <div className="flex flex-col items-start">
            <a
              href="/"
              className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
            >
              A.
            
            <div className="flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-white">
                {availabilityStatus ? "Open to work" : "Available for work"}
              </span>
            </div></a>
          </div>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={
                isOpen
                  ? "https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=41659&format=png&color=000000"
              }
              className="h-6 w-6 text-white"
              stroke="currentColor"
              alt="menu"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
