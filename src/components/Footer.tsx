import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">О компании</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-teal text-sm">О нас</Link></li>
              <li><Link to="/contacts" className="text-gray-600 hover:text-brand-teal text-sm">Контакты</Link></li>
              <li><Link to="/reviews" className="text-gray-600 hover:text-brand-teal text-sm">Отзывы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog/family" className="text-gray-600 hover:text-brand-teal text-sm">Семейные игры</Link></li>
              <li><Link to="/catalog/kids" className="text-gray-600 hover:text-brand-teal text-sm">Детские игры</Link></li>
              <li><Link to="/catalog/strategy" className="text-gray-600 hover:text-brand-teal text-sm">Стратегии</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/delivery" className="text-gray-600 hover:text-brand-teal text-sm">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-600 hover:text-brand-teal text-sm">Оплата</Link></li>
              <li><Link to="/return" className="text-gray-600 hover:text-brand-teal text-sm">Возврат</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">© Бинго-Бонго {new Date().getFullYear()}. Все права защищены.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-brand-teal">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-teal">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-teal">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
