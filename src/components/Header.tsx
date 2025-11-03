import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo/logo.png';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'doctor', label: 'About Doctor' },
    { id: 'blog', label: 'Blog' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2 md:py-3' : 'bg-white/95 backdrop-blur-sm py-3 md:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: "50px" }}>
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img
              src={logo}
              alt="Clinic Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-green-500 text-white'
                    : 'text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() =>
                window.open(
                  'https://tools.childrensgastroliver.org',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="ml-2 px-5 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Tools
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-green-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 border-t border-gray-200 pt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-green-500 text-white'
                      : 'text-gray-700 hover:bg-green-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() =>
                  window.open(
                    'https://tools.childrensgastroliver.org',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="mt-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-md"
              >
                Tools
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
