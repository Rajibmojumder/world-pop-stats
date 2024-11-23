import { Link, useLocation } from 'react-router-dom';
import { Globe2, MapPin, Home, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white relative">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between relative">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo - centered on mobile, left on desktop */}
          <Link to="/" className="flex items-center space-x-2 absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:transform-none">
            <Globe2 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">WorldPopStats</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center gap-2 hover:text-blue-200 transition ${location.pathname === '/' ? 'text-blue-200' : ''}`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link 
              to="/city" 
              className={`flex items-center gap-2 hover:text-blue-200 transition ${location.pathname === '/city' ? 'text-blue-200' : ''}`}
            >
              <MapPin className="h-4 w-4" />
              City Explorer
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-blue-600 mt-2 py-4 px-4 rounded-lg shadow-lg md:hidden z-50">
              <Link 
                to="/" 
                className={`flex items-center gap-2 hover:text-blue-200 transition py-2 ${location.pathname === '/' ? 'text-blue-200' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link 
                to="/city" 
                className={`flex items-center gap-2 hover:text-blue-200 transition py-2 ${location.pathname === '/city' ? 'text-blue-200' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="h-4 w-4" />
                City Explorer
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}