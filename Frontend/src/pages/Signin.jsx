import React from 'react'
import Logo from '../components/Navbar/Logo'
const Signin = () => {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col  justify-center py-12 lg:px-5 border-[1px]  border-slate-800">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm p-14  bg-slate-100 rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <div className="flex items-center justify-center">
              <h1 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900   ">
                Welcome Please
              </h1>
            </div>
            <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email / User Id
                </label>
                <div className="mt-2">
                  <input
                    id="LoginId"
                    name="LoginId"
                    type="text"
                    required
                    autoComplete="LoginId"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin