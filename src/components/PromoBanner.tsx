import { Button } from '@/components/ui/button';

const PromoBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-brand-teal rounded-full p-3">
                <span className="text-white text-xl">❤️</span>
              </div>
              <h2 className="ml-4 text-2xl md:text-3xl font-bold">
                РАСПРОДАЖА<br />
                ДЕТСКИХ ИГР
              </h2>
            </div>
            
            <p className="text-gray-700 mb-6 max-w-md">
              Специальное предложение: скидки до 50% на все детские игры до конца месяца.
              Торопитесь, количество товаров ограничено!
            </p>
            
            <Button variant="orange" size="lg" className="rounded-md font-medium">
              Смотреть каталог
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560859251-d530f8cd9c66?auto=format&fit=crop&q=80" 
              alt="Детские игры" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
