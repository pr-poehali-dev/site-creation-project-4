import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:py-32 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-48 md:h-48 bg-brand-yellow rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-brand-green rounded-tr-full -z-10"></div>
      
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            НАСТОЛЬНЫЕ ИГРЫ
            <div className="text-brand-teal">ДЛЯ ЛЮБОЙ КОМПАНИИ</div>
          </h1>
          
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Самые увлекательные игры для детей и взрослых.<br />
            Доставка по всей России от 2 дней.
          </p>
          
          <Button variant="orange" size="lg" className="rounded-md font-medium">
            Смотреть каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
