import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FavoriteGames = () => {
  const games = [
    {
      id: 1,
      name: 'Лила',
      image: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&q=80',
      type: 'Домо',
    },
    {
      id: 2,
      name: 'Передвижение',
      image: 'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?auto=format&fit=crop&q=80',
      type: 'Логика',
    },
    {
      id: 3,
      name: 'Световой День',
      image: 'https://images.unsplash.com/photo-1606503153255-59d8a2e62167?auto=format&fit=crop&q=80',
      type: 'Семейная',
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">ЛЮБИМЫЕ ИГРЫ ПОКУПАТЕЛЕЙ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">{game.type}</div>
                <h3 className="font-semibold text-lg mb-3">{game.name}</h3>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-brand-teal hover:text-brand-teal/80 flex items-center gap-1 text-sm"
                >
                  Подробнее <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteGames;
