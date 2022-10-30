import { useState } from "react";
import { Link } from "react-router-dom";

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
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="mx-auto px-6 py-3 md:flex md:justify-around md:items-center bg-gray-900 md:bg-transparent">
        <div className="flex justify-between items-center">
          <div className="">
            <Link to={'/'} className="text-white font-bold hover:opacity-80 flex justify-between items-center">
              <img
                className="h-[50px] w-[50px]"
                src="/images/parrot.webp"
              ></img>
              <div>
                <span className="text-[40px] text-red-600">Parrot</span>
                <span className="text-[20px]">Sup</span>
              </div>
            </Link>
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

        <div className={`${classSubNav} md:flex ml-0 md:ml-[100px]`}>
          <form>
            <div className="relative mb-2 md:mb-0">
              <i className="absolute fa-solid fa-magnifying-glass text-white"></i>
              <input className="w-[80vw] md:w-[20vw] bg-transparent focus:outline-0 border-b-2 border-gray-100 focus:border-red-600 pl-8 text-white"></input>
            </div>
          </form>
          <div className="md:hidden items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <a className="my-1 text-sm text-gray-100 font-medium hover:text-red-500 md:mx-4 md:my-0">
                About
              </a>
              <a className="my-1 text-sm text-gray-100 font-medium hover:text-red-500 md:mx-4 md:my-0">
                Whey
              </a>
              <a className="my-1 text-sm text-gray-100 font-medium hover:text-red-500 md:mx-4 md:my-0">
                Mass
              </a>
            </div>




          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="my-1 text-sm text-gray-100 font-medium hover:text-red-500 md:mx-4 md:my-0" Id="sign_in">
            Sign In
          </div>
          <div className="w-[2px] h-[20px] bg-gray-500 mx-5 md:mx-0"></div>
          <a href="http://localhost:3000/Signup" className="my-1 text-sm text-gray-100 font-medium hover:text-red-500 md:mx-4 md:my-0">
            Sign Up
          </a>
          <div className="ml-5 flex justify-center md:block">
            <a className="relative text-gray-100 hover:text-red-600">
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
        </div>
      </div>
    </nav>
  );
}
