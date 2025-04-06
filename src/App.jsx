import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Button from './components/Button'
import { useTheme } from './contexts/ThemeContext'

{/*function App() {
  const [count, setCount] = useState(0)
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const navLinks = [
    { text: 'Home', url: '#' },
    { text: 'Features', url: '#features' },
    { text: 'About', url: '#about' },
    { text: 'Contact', url: '#contact' },
  ]

  return (
    <div className={isDark ? 'bg-gray-900 text-gray-100 h-screen' : 'bg-gray-50 text-gray-900 h-screen'}>
      <Navbar title="React + Tailwind" links={navLinks} />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            React + Tailwind + Vite + Dark Mode
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A modern development setup for building fast and responsive web applications with dark mode support
          </p>
        </header>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card 
            title="Getting Started" 
            footer={
              <Button variant="outline" size="sm">Learn More</Button>
            }
          >
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              This template gives you a head start with React, Tailwind CSS, and Vite for modern web development.
            </p>
          </Card>
          
          <Card 
            title="Counter Example" 
            footer={
              <div className="flex space-x-2">
                <Button variant="danger" size="sm" onClick={() => setCount(count - 1)}>Decrease</Button>
                <Button variant="success" size="sm" onClick={() => setCount(count + 1)}>Increase</Button>
              </div>
            }
          >
            <div className="text-center py-4">
              <p className={isDark ? 'text-gray-300 mb-2' : 'text-gray-700 mb-2'}>Current Count:</p>
              <p className="text-4xl font-bold text-blue-500">{count}</p>
            </div>
          </Card>
          
          <Card 
            title="Dark Mode Feature" 
            footer={
              <Button size="sm">Explore Components</Button>
            }
          >
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              This project includes a theme toggle with persistent storage using localStorage and system preference detection.
            </p>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Button Variants</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
      </div>
      
      <footer className={isDark ? 'bg-gray-900 text-gray-300 py-8 mt-12 border-t border-gray-800' : 'bg-white text-black py-8 mt-12'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>React + Tailwind CSS + Vite Starter Template with Dark Mode</p>
          <p className={isDark ? 'text-gray-400 text-sm mt-2' : 'text-gray-400 text-sm mt-2 border-t border-gray-200'}>
            Created for demonstration purposes
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App;*/}

import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
    </div>
  );
}

export default App;
