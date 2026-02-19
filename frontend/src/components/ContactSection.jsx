const ContactSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
          <h2 className="text-gray-900 dark:text-white text-2xl font-bold md:text-3xl lg:text-4xl">
            Get in Touch
          </h2>
          <span className="absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <img
            src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/contact/contact-8.png"
            alt="Contact our drink specialists"
            className="w-full h-auto rounded-2xl shadow-xl"
          />

          {/* Contact Info Section */}
          <div>
            {/* Section Title */}
            <h3 className="text-gray-900 dark:text-white mb-4 text-2xl font-semibold">
              We'd Love to Hear From You!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Have questions about our beverages? Looking for a specific drink
              or want to discuss wholesale opportunities? Our team is here to
              help you find the perfect refreshment.
            </p>

            {/* Contact Info Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Customer Service Hours */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-900 dark:text-white text-lg font-medium">
                    Customer Service
                  </h4>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Mon-Fri: 8am - 8pm
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sat-Sun: 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Locations */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-900 dark:text-white text-lg font-medium">
                    Visit Our Taproom
                  </h4>
                  <address className="text-gray-600 dark:text-gray-400 not-italic">
                    123 Brewery Lane
                    <br />
                    Portland, OR 97201
                  </address>
                </div>
              </div>

              {/* Wholesale Inquiries */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-900 dark:text-white text-lg font-medium">
                    Wholesale
                  </h4>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      wholesale@drinkup.com
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      (503) 555-0123
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-900 dark:text-white text-lg font-medium">
                    Get in Touch
                  </h4>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      hello@drinkup.com
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      (503) 555-6789
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.38 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
