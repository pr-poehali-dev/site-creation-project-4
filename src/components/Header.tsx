import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img src="/public/logo-b.svg" alt="Логотип" className="h-8" />
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-800 hover:text-primary text-sm font-medium">
              О нас
            </Link>
            <Link to="/catalog" className="text-gray-800 hover:text-primary text-sm font-medium">
              Каталог
            </Link>
            <Link to="/promotions" className="text-gray-800 hover:text-primary text-sm font-medium">
              Постоянные акции
            </Link>
            <Link to="/new" className="text-gray-800 hover:text-primary text-sm font-medium">
              Новые товары
            </Link>
            <Link to="/contacts" className="text-gray-800 hover:text-primary text-sm font-medium">
              Контакты
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
