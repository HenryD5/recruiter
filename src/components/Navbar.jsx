import { useState } from "react";
import logo from "../assets/imgs/logo.jpeg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="shadow bg-white sticky top-0">
        <div className="container mx-auto flex items-center justify-between flex-wrap px-5 py-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-96">
            <img src={logo} className="w-100 h-10 mr-2" alt="Logo" /> <span className="text-black text-base">Logo</span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 ${
                  isOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${
                  isOpen ? "block" : "hidden"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-base lg:flex-grow">
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 lg:mx-6 text-white-200 mr-4"
              >
                First Link
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 lg:mx-6 text-white-200 mr-4"
              >
                Second Link
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 lg:mx-6 text-white-200 mr-4"
              >
                Third Link
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 lg:mx-6  text-white-200 mr-4"
              >
                Fourth Link
              </a>
            </div>
            <div>
              <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white text-base">
                Click Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
