import coca from '../assets/coca-cola-1.jpg';
import energy from '../assets/energy-drink-2.jpg';
const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {/* Image Grid */}
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className="rounded-xl object-cover"
                src={coca}
                alt="Artisanal drink preparation"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src={energy}
              alt="Premium beverage selection"
            />
          </div>

          {/* Content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 dark:text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Crafting Premium Beverages Since 1990
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                  Every drink we create is a masterpiece of flavor and quality.
                  From artisanal coffees to refreshing craft sodas, we source
                  the finest ingredients and work with local producers to bring
                  you an unforgettable tasting experience. Our passion for
                  excellence drives us to innovate and perfect every recipe.
                </p>
              </div>

              {/* Stats */}
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-amber-600 dark:text-amber-400 text-4xl font-bold font-manrope leading-normal">
                    150+
                  </h3>
                  <h6 className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                    Unique Recipes
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-amber-600 dark:text-amber-400 text-4xl font-bold font-manrope leading-normal">
                    50k+
                  </h4>
                  <h6 className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                    Happy Customers
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-amber-600 dark:text-amber-400 text-4xl font-bold font-manrope leading-normal">
                    25+
                  </h4>
                  <h6 className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                    Drink Varieties
                  </h6>
                </div>
              </div>
            </div>

            <button className="sm:w-fit w-full px-3.5 py-2 bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700 transition-all duration-700 ease-in-out rounded-lg shadow-lg hover:shadow-xl justify-center items-center flex group">
              <span className="px-1.5 text-white text-sm font-medium leading-6 group-hover:tracking-wider transition-all">
                Discover Our Story
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
