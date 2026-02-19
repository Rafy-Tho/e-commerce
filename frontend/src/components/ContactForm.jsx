import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="grid lg:grid-cols-2 items-start gap-16 p-6 mx-auto max-w-5xl max-lg:max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl my-8">
      {/* Left Column - Contact Info */}
      <div>
        <h2 className="text-gray-900 dark:text-white text-3xl font-bold">
          Let's Connect
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base mt-4 leading-relaxed">
          Have questions about our beverages? Looking for a specific drink or
          want to discuss wholesale opportunities? We'd love to hear from you
          and help with your refreshment needs.
        </p>

        {/* Email Section */}
        <div className="mt-12">
          <h2 className="text-gray-900 dark:text-white text-base font-semibold">
            Email Us
          </h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-amber-100 dark:bg-amber-900/30 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  height="22px"
                  fill="#d97706"
                  viewBox="0 0 479.058 479.058"
                >
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
              </div>
              <a href="mailto:hello@drinkup.com" className="text-sm ml-4 group">
                <small className="block text-gray-500 dark:text-gray-400">
                  General Inquiries
                </small>
                <span className="font-semibold text-amber-600 dark:text-amber-400 group-hover:underline">
                  hello@drinkup.com
                </span>
              </a>
            </li>
            <li className="flex items-center mt-4">
              <div className="bg-amber-100 dark:bg-amber-900/30 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  height="22px"
                  fill="#d97706"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10.5a8 8 0 1 0-16 0c0 4.5 8 12 8 12s8-7.5 8-12zm-8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
              </div>
              <a
                href="mailto:wholesale@drinkup.com"
                className="text-sm ml-4 group"
              >
                <small className="block text-gray-500 dark:text-gray-400">
                  Wholesale
                </small>
                <span className="font-semibold text-amber-600 dark:text-amber-400 group-hover:underline">
                  wholesale@drinkup.com
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column - Form */}
      <form onSubmit={handleSubmit} className="lg:ml-auto space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full rounded-lg py-3.5 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm border border-gray-200 dark:border-gray-700 focus:border-amber-500 dark:focus:border-amber-400 outline-none focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-900/30 transition-all"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full rounded-lg py-3.5 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm border border-gray-200 dark:border-gray-700 focus:border-amber-500 dark:focus:border-amber-400 outline-none focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-900/30 transition-all"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full rounded-lg py-3.5 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm border border-gray-200 dark:border-gray-700 focus:border-amber-500 dark:focus:border-amber-400 outline-none focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-900/30 transition-all"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          required
          className="w-full rounded-lg px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm pt-3.5 border border-gray-200 dark:border-gray-700 focus:border-amber-500 dark:focus:border-amber-400 outline-none focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-900/30 transition-all resize-none"
        />
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 tracking-wide rounded-lg text-sm font-medium px-6 py-3.5 w-full cursor-pointer transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
