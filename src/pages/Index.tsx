import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import BingoBongo from '@/components/BingoBongo';
import FavoriteGames from '@/components/FavoriteGames';
import PromoBanner from '@/components/PromoBanner';
import ProductCard from '@/components/ProductCard';
import GamewaySection from '@/components/GamewaySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <AboutUs />
        <BingoBongo />
        <FavoriteGames />
        <PromoBanner />
        
        <ProductCard 
          name="Город"
          price={1990}
          image="https://images.unsplash.com/photo-1632501641765-e568d28b0015?auto=format&fit=crop&q=80"
          description="Стратегическая игра для всей семьи, в которой вам предстоит построить собственный город. Планируйте постройки, управляйте ресурсами, торгуйте с соседями и создайте самый процветающий город в округе! Для 2-5 игроков, продолжительность партии 45-60 минут."
        />
        
        <GamewaySection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
