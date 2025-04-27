const BingoBongo = () => {
  const features = [
    {
      title: "Быстрая доставка",
      color: "bg-brand-teal",
      icon: "🚚"
    },
    {
      title: "Подарочная упаковка",
      color: "bg-brand-pink",
      icon: "🎁"
    },
    {
      title: "Лучший выбор",
      color: "bg-brand-yellow",
      icon: "⭐"
    },
    {
      title: "Профессиональная консультация",
      color: "bg-[#FF6A3D]",
      icon: "👨‍💼"
    },
    {
      title: "Акции и скидки",
      color: "bg-brand-green",
      icon: "💰"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-100 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">БИНГО БОНГО</h2>
        <p className="text-center text-gray-600 mb-10">
          Самые лучшие настольные игры для вашей компании.<br />
          У нас вы найдете то, что вам подойдет!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.color} bg-opacity-20 px-6 py-3 rounded-full flex items-center gap-2 text-sm md:text-base`}
            >
              <span className="text-xl">{feature.icon}</span>
              <span className="font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BingoBongo;
