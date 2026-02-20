import features from '../constants/feature';

const Feature = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
          <h2 className="text-base font-semibold leading-7 text-amber-100 bg-amber-600 px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 lg:mb-6">
            Why Choose Us
          </h2>
          <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Crafted with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700">
              Passion & Precision
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl text-center">
            Discover what makes our beverages special. From ethically sourced
            ingredients to expert craftsmanship, every detail is designed to
            elevate your drinking experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-7xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.id} className="relative pl-16 group">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <span className="text-lg group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </span>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </dd>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-16 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </dl>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-200 dark:border-gray-700 pt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
              150+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Unique Recipes
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
              50k+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Happy Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
              25+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Local Partners
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Natural Ingredients
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Explore Our Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
