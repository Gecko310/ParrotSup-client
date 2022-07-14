import { useState } from "react";
import { useEffect } from "react";
export default function NavBar() {
  const [classSubNav, setClassSubNav] = useState("hidden");
  const [classDropDown, setClassDropDown] = useState("hidden");

  // useEffect(() => {
  //   window.addEventListener('click', (e) =>{
  //     if(classDropDown!=="hidden"){
  //       console.log(e.target);  
  //     }
  //   })
  // }, []);

  function handleClickToogleSubNav() {
    if (classSubNav === "hidden") {
      setClassSubNav("");
    } else {
      setClassSubNav("hidden");
    }
  };

  function handleClickToogleDropDown() {
    if (classDropDown === "hidden") {
      setClassDropDown("");
    } else {
      setClassDropDown("hidden");
    };
  }

  return (
    <nav className="bg-white  shadow">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700 flex justify-between items-center">
              <div>
                <span className="text-[35px] text-red-600">P</span>arrotSup
              </div>
              <img
                className="h-[50px] w-[50px] ml-2"
                src="/images/parrot.png"
              ></img>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              onClick={handleClickToogleSubNav}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`${classSubNav} md:flex w-full ml-0 md:ml-[100px]`}>
          <form className="w-full my-2 md:w-[50%]">
            <div className="flex relative h-8 md:h-10">
              <label
                for="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900"
              ></label>
              <button
                id="dropdown-button"
                onClick={handleClickToogleDropDown}
                data-dropdown-toggle="dropdown"
                className="hidden md:flex flex-shrink-0 z-10 inline-flex items-center py-1 px-4 text-sm font-medium text-center text-white rounded-l-md bg-red-700 hover:bg-red-900 focus:ring-2 focus:outline-none focus:ring-red-100"
                type="button"
              >
                Supplement
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown"
                className={`${classDropDown} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow absolute left-0 top-10 m-0`}
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
              >
                <ul
                  className="py-1 text-sm text-gray-700"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <div className="px-4 text-left w-full text-stone-900">
                      <div className="pt-2">Whey</div>
                      <ul className="ml-2">
                        <li className="mt-1">Whey Concentrated</li>
                        <li className="mt-1">Whey Isolate</li>
                        <li className="mt-1">Whey Hydrolized</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="px-4 text-left w-full text-stone-900">
                      <div className="pt-2">Mass</div>
                      <ul className="ml-2">
                        <li className="mt-1">Fat Mass</li>
                        <li className="mt-1">Lean Mass</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="px-4 text-left w-full text-stone-900">
                      <div className="pt-2">Other</div>
                      <ul className="ml-2">
                        <li className="mt-1">Creatine</li>
                        <li className="mt-1">EAAA</li>
                        <li className="mt-1">BCAA</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block h-8 md:h-10 pl-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg md:rounded-l-none rounded-r-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Mass, Whey, BCAA, EAA, etc."
                  required=""
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 h-8 md:h-10 px-2 text-sm font-medium text-white bg-red-700 rounded-r-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <a className="my-1 text-sm text-gray-700 font-medium hover:text-red-500 md:mx-4 md:my-0">
                About
              </a>
              <a className="my-1 text-sm text-gray-700 font-medium hover:text-red-500 md:mx-4 md:my-0">
                Whey
              </a>
              <a className="my-1 text-sm text-gray-700 font-medium hover:text-red-500 md:mx-4 md:my-0">
                Mass
              </a>
            </div>

            <div className="flex justify-center md:block">
              <a className="relative text-gray-700 hover:text-gray-600">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="absolute top-0 left-0 rounded-full bg-red-500 text-white p-1 text-xs"></span>
              </a>
            </div>

            <div className="ml-5"></div>
            <div className="flex items-center justify-center">
              <a className="my-1 text-sm text-gray-700 font-medium hover:text-red-500 md:mx-4 md:my-0">
                Sign In
              </a>
              <div className="w-[2px] h-[20px] bg-gray-500 mx-5 md:mx-0"></div>
              <a className="my-1 text-sm text-gray-700 font-medium hover:text-red-500 md:mx-4 md:my-0">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
