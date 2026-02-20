import { useState } from 'react';
import { useRegisterMutation } from '../services/API/authApiSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserCredentials } from '../services/FEATURE/autSlice';
import { Link, useNavigate } from 'react-router-dom';
const initialFormData = {
  name: 'Rafy Rahman',
  email: 'rafyrahman@gmail.com',
  password: 'Rafy@!1234',
  gender: 'male',
  acceptTerms: false,
};
const SignUpScreen = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.acceptTerms)
      errors.acceptTerms = 'You must accept the terms and conditions';
    if (Object.keys(errors).length > 0) return setFormError(errors);
    // Submit the form
    try {
      const response = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
      }).unwrap();
      toast.success(response.message || 'Registration successful!');
      dispatch(setUserCredentials({ user: response.user }));
      navigate('/');
    } catch (error) {
      toast.error(error.data.message || 'Registration failed');
    }
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider}`);
    // Add social sign-up logic here
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex items-center md:h-screen p-4">
      <div className="w-full max-w-3xl max-md:max-w-xl mx-auto">
        <div className="bg-white dark:bg-gray-800 grid md:grid-cols-2 gap-10 w-full sm:p-8 p-6 shadow-xl rounded-2xl overflow-hidden">
          {/* Left Column - Social Login Options */}
          <div className="max-md:order-1 space-y-6">
            <div className="md:mb-16 mb-8">
              <h2 className="text-gray-900 dark:text-white text-2xl font-medium">
                Join{' '}
                <span className="text-amber-600 dark:text-amber-400">
                  DrinkUp
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Create your account to discover exclusive drinks and offers
              </p>
            </div>

            <div className="space-y-4">
              {/* Facebook Button */}
              <button
                type="button"
                onClick={() => handleSocialSignUp('facebook')}
                className="w-full px-4 py-3 flex items-center justify-center cursor-pointer rounded-xl text-white text-sm font-semibold tracking-wider border-none outline-none bg-[#1877F2] hover:bg-[#0d6ae4] transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  fill="#fff"
                  className="inline shrink-0 mr-3"
                  viewBox="0 0 167.657 167.657"
                >
                  <path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z" />
                </svg>
                Continue with Facebook
              </button>

              {/* Google Button */}
              <button
                type="button"
                onClick={() => handleSocialSignUp('google')}
                className="w-full px-4 py-3 flex items-center justify-center cursor-pointer rounded-xl text-gray-900 dark:text-white text-sm font-semibold tracking-wider border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  className="inline shrink-0 mr-3"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  />
                </svg>
                Continue with Google
              </button>

              {/* Apple Button */}
              <button
                type="button"
                onClick={() => handleSocialSignUp('apple')}
                className="w-full px-4 py-3 flex items-center justify-center cursor-pointer rounded-xl text-white text-sm font-semibold tracking-wider border-none outline-none bg-gray-900 hover:bg-gray-800 dark:bg-black dark:hover:bg-gray-900 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  fill="#fff"
                  className="inline shrink-0 mr-3"
                  viewBox="0 0 22.773 22.773"
                >
                  <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" />
                </svg>
                Continue with Apple
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  or register with email
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
              <h2 className="text-gray-900 dark:text-white text-2xl font-medium">
                Create Account
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Get started with your free account
              </p>
            </div>

            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="text-gray-900 dark:text-white text-sm font-medium mb-2 block">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full text-sm text-gray-900 dark:text-white pl-4 pr-10 py-3 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#9CA3AF"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6" />
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
                  </svg>
                </div>
                {formError?.name && (
                  <p className="text-red-500 text-sm mt-1">{formError.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="text-gray-900 dark:text-white text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full text-sm text-gray-900 dark:text-white pl-4 pr-10 py-3 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#9CA3AF"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <g transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path
                        fill="none"
                        stroke="#9CA3AF"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40z"
                      />
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653z"
                        fill="#9CA3AF"
                      />
                    </g>
                  </svg>
                </div>
                {formError?.email && (
                  <p className="text-red-500 text-sm mt-1">{formError.email}</p>
                )}
              </div>
              {/* Gender Field */}
              <div>
                <label className="text-gray-900 dark:text-white text-sm font-medium mb-2 block">
                  Gender
                </label>
                <div className="relative flex items-center">
                  <select
                    name="gender"
                    type="select"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full text-sm text-gray-900 dark:text-white pl-4 pr-10 py-3 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                {formError?.gender && (
                  <p className="text-red-500 text-sm mt-1">
                    {formError.gender}
                  </p>
                )}
              </div>
              {/* Password Field */}
              <div>
                <label className="text-gray-900 dark:text-white text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full text-sm text-gray-900 dark:text-white pl-4 pr-10 py-3 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9CA3AF"
                      className="w-4 h-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                    </svg>
                  </button>
                </div>
                {formError?.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formError.password}
                  </p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start">
                <input
                  id="accept-terms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="h-4 w-4 mt-1 shrink-0 text-amber-600 focus:ring-amber-500 border-gray-300 dark:border-gray-600 rounded"
                />
                <label
                  htmlFor="accept-terms"
                  className="text-gray-600 dark:text-gray-400 ml-3 block text-sm"
                >
                  I agree to the{' '}
                  <a
                    href="#"
                    className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    href="#"
                    className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              {formError?.acceptTerms && (
                <p className="text-red-500 text-sm mt-1">
                  {formError.acceptTerms}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="!mt-8">
              <button
                type="submit"
                disabled={!formData.acceptTerms}
                className={`w-full py-3 px-4 text-sm font-semibold tracking-wider cursor-pointer rounded-xl text-white focus:outline-none transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${
                  formData.acceptTerms
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>

            {/* Login Link */}
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-6 text-center">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-amber-600 dark:text-amber-400 font-medium hover:underline ml-1"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
