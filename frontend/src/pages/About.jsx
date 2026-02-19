import about from '../assets/about.jpg';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <>
      <AboutSection />
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 dark:text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Crafting Community Through Every Sip
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                  We bring together local farmers, master mixologists, and
                  passionate drink lovers to create beverages that do more than
                  just quench thirst. Every bottle supports sustainable farming
                  practices, fair trade partnerships, and community initiatives
                  that make a real difference.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-amber-600 hover:bg-amber-700 transition-all duration-700 ease-in-out rounded-lg shadow-lg justify-center items-center flex group">
                <span className="px-1.5 text-white text-sm font-medium leading-6 group-hover:tracking-wider transition-all">
                  Join Our Community
                </span>
              </button>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover shadow-xl"
              src={about}
              alt="Community of drink enthusiasts"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
