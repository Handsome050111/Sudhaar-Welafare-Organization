import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Success Stories', path: '/stories' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky  top-0 z-50 w-full flex flex-col">
      {/* Topbar */}
      <div className="bg-primary text-white py-2 hidden lg:block border-b border-primary-dark shadow-sm">
        <div className="container-custom flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <a href="mailto:sudhaarwelfare.org@gmail.com" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Mail size={14} /> Email: sudhaarwelfare.org@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:0572363615" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Phone size={14} /> Telephone: 0572363615
            </a>
            <a href="tel:03162664019" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Phone size={14} /> Phone: 03162664019
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b-2  border-primary shadow-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img src="/logo.jpeg" alt="Sudhaar Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
              <div className="hidden sm:block">
                <h1 className="font-bold text-primary text-sm md:text-base leading-tight">
                  Sudhaar Welfare
                </h1>
                <p className="text-xs text-gray-600 leading-tight">Organization</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium text-sm transition-colors duration-200 ${isActive(link.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-700 hover:text-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 font-medium text-sm transition-colors duration-200 ${isActive(link.path)
                    ? 'text-primary bg-primary-light'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;