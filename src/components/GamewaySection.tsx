const GamewaySection = () => {
  const features = [
    { text: "3 недели", color: "bg-brand-pink" },
    { text: "5 игр", color: "bg-brand-yellow" },
    { text: "3 часа", color: "bg-brand-green" }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">ОКТЯБРЬСКАЯ ИГРОТЕКА</h2>
        <p className="text-gray-600 mb-10">
          Приходите играть вместе с нами! Каждое воскресенье октября в 12:00 
          мы собираемся в нашем магазине и играем в лучшие настольные игры.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.color} bg-opacity-20 px-6 py-3 rounded-full flex items-center text-sm md:text-base font-medium`}
            >
              {feature.text}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-6 space-x-4">
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="attendance" className="sr-only" defaultChecked />
              <span className="w-4 h-4 border border-brand-teal rounded-full mr-2 flex items-center justify-center">
                <span className="w-2 h-2 bg-brand-teal rounded-full"></span>
              </span>
              <span className="text-sm">Один</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="attendance" className="sr-only" />
              <span className="w-4 h-4 border border-gray-300 rounded-full mr-2"></span>
              <span className="text-sm">С друзьями</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="attendance" className="sr-only" />
              <span className="w-4 h-4 border border-gray-300 rounded-full mr-2"></span>
              <span className="text-sm">С компанией</span>
            </label>
          </div>
          
          <button className="bg-[#FF6A3D] text-white py-3 px-8 rounded-md font-medium hover:bg-[#FF6A3D]/90 transition-colors">
            Записаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamewaySection;
