import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  description: string;
};

const ProductCard = ({ name, price, image, description }: ProductCardProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span className="text-sm text-brand-teal">+7 916 XXXX-XX</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{name.toUpperCase()}</h2>
              
              <p className="text-gray-700 mb-6">
                {description}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Производитель:</span>
                  <span className="font-medium">Россия</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Возраст:</span>
                  <span className="font-medium">8+</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl font-bold">{price} ₽</div>
                <Button variant="orange" className="rounded-md">
                  В корзину
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <img 
                src={image} 
                alt={name} 
                className="w-full max-w-sm h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
