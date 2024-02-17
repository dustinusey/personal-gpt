import "flowbite";
import { Dropdown } from "flowbite-react";
import { useContext, useState } from "react";
import { AppState } from "../App";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { userSignIn, signedIn, userSignOut, user } = useContext(AppState);
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-800 dark:border-gray-900">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 hue-rotate-[30deg]"
              alt=""
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Personal GPT
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {!signedIn ? (
              <button
                onClick={userSignIn}
                type="button"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Sign In
              </button>
            ) : (
              <div
                onClick={() => {
                  setToggleDropdown(!toggleDropdown);
                }}
                className="cursor-pointer relative text-white flex items-center"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.photoURL}
                  alt=""
                />

                <svg
                  className="ml-2 w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
                {/* dropdown */}
                {toggleDropdown && (
                  <ul className="text-sm p-2 rounded-md bg-slate-800 absolute top-[150%] right-0 w-[146px]">
                    <li className="border-b p-3 border-slate-700">
                      {user.displayName}
                    </li>
                    <li
                      onClick={userSignOut}
                      className="mt-3 hover:bg-slate-700 cursor-pointer p-3 duration-200 rounded-md"
                    >
                      Sign Out
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
