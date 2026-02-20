import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../services/API/authApiSlice';
import { toast } from 'react-toastify';
import { setUserCredentials } from '../services/FEATURE/autSlice';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: 'john.doe@gmail.com',
    password: 'John@123',
    rememberMe: false,
  });
  const [formError, setFormError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
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
    setFormError({});
    if (!formData.email || !formData.password) {
      setFormError({
        email: !formData.email ? 'Email is required' : '',
        password: !formData.password ? 'Password is required' : '',
      });
      return;
    }
    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();
      toast.success(response.message || 'Login successful');
      dispatch(setUserCredentials({ user: response.user }));
    } catch (err) {
      toast.error(err.data?.message || 'Login failed');
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in');
    // Add Google sign-in logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 items-center gap-y-4 h-full">
        {/* Left Column - Brand Image */}
        <div className="max-md:order-1 lg:col-span-3 md:h-screen w-full bg-gradient-to-br from-amber-900 to-amber-700 md:rounded-tr-xl md:rounded-br-xl lg:p-12 p-8 flex items-center">
          <div className="text-center lg:text-left">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:w-2/3 w-full h-full object-contain block mx-auto lg:mx-0 mb-8"
              alt="Drink collection"
            />
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
              Welcome Back to <span className="text-amber-200">DrinkUp</span>
            </h2>
            <p className="text-amber-100 text-lg max-w-md mx-auto lg:mx-0">
              Your favorite beverages are just a sip away. Sign in to discover
              new flavors and exclusive deals.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-amber-100">
                <svg
                  className="w-5 h-5 text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Access your favorite drinks</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <svg
                  className="w-5 h-5 text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Exclusive member discounts</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <svg
                  className="w-5 h-5 text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Fast checkout & order tracking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sign In Form */}
        <div className="lg:col-span-2 w-full p-8 max-w-lg max-md:max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h1 className="text-gray-900 dark:text-white text-3xl font-bold">
                Sign In
              </h1>
              <p className="text-[15px] mt-6 text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-amber-600 dark:text-amber-400 font-medium hover:underline ml-1 whitespace-nowrap"
                >
                  Create account
                </Link>
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="text-gray-900 dark:text-white text-[15px] font-medium mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 focus:bg-transparent dark:focus:bg-gray-800 pl-4 pr-10 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-amber-500 dark:focus:border-amber-400 outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#9CA3AF"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <g transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path
                        fill="none"
                        stroke="#9CA3AF"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      />
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        fill="#9CA3AF"
                      />
                    </g>
                  </svg>
                </div>
                {formError?.email && (
                  <p className="text-red-500 text-sm mt-1">{formError.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="text-gray-900 dark:text-white text-[15px] font-medium mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 focus:bg-transparent dark:focus:bg-gray-800 pl-4 pr-10 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-amber-500 dark:focus:border-amber-400 outline-none transition-colors"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9CA3AF"
                      className="w-[18px] h-[18px]"
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

              {/* Remember Me & Forgot Password */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 shrink-0 text-amber-600 focus:ring-amber-500 border-gray-300 dark:border-gray-600 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-[15px] text-gray-900 dark:text-white"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    href="javascript:void(0);"
                    className="text-amber-600 dark:text-amber-400 font-medium text-sm hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <div className="mt-12">
              <button
                type="submit"
                className={`${isLoading ? 'cursor-not-allowed' : ''} w-full py-3 px-4 text-[15px] font-semibold tracking-wide rounded-lg text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-800 transition-all duration-300 transform hover:scale-[1.02]`}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <hr className="w-full border-gray-300 dark:border-gray-600" />
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                or
              </p>
              <hr className="w-full border-gray-300 dark:border-gray-600" />
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-3 px-6 text-[15px] font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
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

            {/* Terms */}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
              By signing in, you agree to our{' '}
              <a
                href="#"
                className="text-amber-600 dark:text-amber-400 hover:underline"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="#"
                className="text-amber-600 dark:text-amber-400 hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
