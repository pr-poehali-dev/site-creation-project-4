const AboutUs = () => {
  return (
    <section className="py-12 md:py-16" id="about">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">О НАС</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              Бинго-Бонго — магазин не только лучших настольных игр в городе, 
              но и место, где вы можете выбрать идеальную игру для своей 
              компании, получить профессиональную консультацию и быстрое обслуживание.
            </p>
            <p className="text-gray-700 mb-4">
              Наши сотрудники не просто продавцы, а эксперты в мире настольных игр. 
              Они с радостью поделятся своим опытом, помогут с выбором, расскажут 
              правила и тонкости игрового процесса любой игры из нашего ассортимента.
            </p>
            <p className="text-gray-700">
              Кроме того, мы регулярно проводим игротеки, где вы можете попробовать 
              новые игры перед покупкой или просто хорошо провести время среди 
              единомышленников. Приходите к нам, и мы гарантируем, что вы уйдете с улыбкой!
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1637978984214-4d72d5958762?auto=format&fit=crop&q=80" 
              alt="Настольные игры" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-brand-pink bg-opacity-30 p-6 rounded-lg">
            <h3 className="font-semibold mb-2 text-lg">Для детей</h3>
            <p className="text-sm text-gray-700">
              Яркие и увлекательные игры для развития внимания, логики и 
              творческого мышления у детей разных возрастов.
            </p>
          </div>
          
          <div className="bg-brand-green bg-opacity-30 p-6 rounded-lg">
            <h3 className="font-semibold mb-2 text-lg">Для взрослых</h3>
            <p className="text-sm text-gray-700">
              Стратегические, экономические, детективные игры, которые 
              подарят незабываемый досуг любой взрослой компании.
            </p>
          </div>
          
          <div className="bg-brand-yellow bg-opacity-30 p-6 rounded-lg">
            <h3 className="font-semibold mb-2 text-lg">Для всей семьи</h3>
            <p className="text-sm text-gray-700">
              Универсальные игры для домашних посиделок, которые объединят 
              всех членов семьи и подарят массу положительных эмоций.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
