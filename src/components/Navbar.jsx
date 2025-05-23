import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DarkModeToggle from './DarkModeToggle';

const Navbar = ({ title, links = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <nav className={isDark ? 'bg-gray-900' : 'bg-gray-800'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-semibold">{title}</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`${isDark 
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'} 
                      px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <DarkModeToggle className="mr-2" />
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isDark 
                  ? 'bg-gray-900 text-gray-400 hover:text-white' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'} 
                  inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`${isDark 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'} 
                  block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;