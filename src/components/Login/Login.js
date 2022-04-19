import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import { BsFacebook,BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';



const Login = () => {
    return (
        <div className="min-h-full flex items-center justify-center  py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 shadow-md py-6 px-6">
          <div>
            
            <h2 className="mt-4 text-center text-3xl font-medium text-gray-900">Login</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-2">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
                <div >
                    <p >Or</p>
                </div>
            <div className="flex gap-4 mx-2">
                     <button className='border border-gray-400 text-2xl rounded-md w-28 flex justify-center py-2 '><BsFacebook className="text-indigo-600 hover:text-indigo-900" /></button>
                     <button className='border border-gray-400 text-2xl rounded-md w-28 flex justify-center py-2 hover:right-bg-gray-400'><FcGoogle className="text-indigo-600 hover:text-indigo-900" /></button>
                     <button className='border border-gray-400 text-2xl rounded-md w-28 flex justify-center py-2 hover:right-bg-gray-400'><BsTwitter className="text-cyan-500 hover:text-cyan-600" /></button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;