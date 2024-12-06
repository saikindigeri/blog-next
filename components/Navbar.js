'use client'
// components/Navbar.js
import Link from 'next/link'
import { useEffect } from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './theme-btn';

export default function Navbar() {

    // pages/_app.js or the page where you use the navbar
useEffect(() => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
  
    btn?.addEventListener("click", () => {
      menu?.classList.toggle("hidden");
    });
  }, []);
  
  return (
   // components/Navbar.js
<nav className="fixed w-full bg-white/30 backdrop-blur-xl shadow-lg z-50">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Devaa
            </Link>
          </div>

          {/* Desktop Menu */}
         <div className="hidden md:flex items-center space-x-8">
  <Link href="/" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-in-out">
    Home
  </Link>
  <Link href="/about" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-in-out">
    About
  </Link>
  <Link href="/blog" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-in-out">
    Blog
  </Link>
  <Link href="/contact" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-in-out">
    Contact
  </Link>
  <div>
    <Button className="mx-1" variant="outline">Login</Button>
    <Button className="mx-1" variant="outline">Signup</Button>
   <ModeToggle/>
  </div>

</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button p-2 rounded-md hover:bg-gray-100/50 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ModeToggle/>
          </div>
       
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/70 backdrop-blur-md">
            <Link href="/" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors">
              About
            </Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors">
    Blog
  </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors">
              Contact
            </Link>
          
          </div>
        </div>
      </div>
    </nav>
  )
}