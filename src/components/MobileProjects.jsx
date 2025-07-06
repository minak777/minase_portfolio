import pic1 from "../assets/Onechanged.png";

import pic3 from "../assets/my.png";
import pic4 from "../assets/strongroot.png";
import pic5 from "../assets/dte.png";
function Project() {
  return (
    <div className="w-full flex flex-col justify-start items-center px-8  pb-8 md:hidden sm:flex">
      <div
        onClick={() => window.open("https://www.dtestumpgrind.com/", "_blank")}
        className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-6 w-full cursor-pointer hover:scale-110 ease-in duration-200"
      >
        {/* Heading */}
        <img src={pic5} alt="" className="mb-4 w-full h-auto rounded-md" />
        <span className="text-teal-200 text-lg font-light mb-5">
          DTE Stump Grinding website
        </span>
        <div className="flex flex-row justify-evenly space-x-4">
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-2 pr-2">
            WordPress
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            HTML
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            CSS
          </span>
        </div>
      </div>

      {/* strong root */}
      <div
        onClick={() => window.open("https://www.strongrootstree.com", "_blank")}
        className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-6 w-full cursor-pointer hover:scale-110 ease-in duration-200"
      >
        {/* Heading */}
        <img src={pic4} alt="" className="mb-4 w-full h-auto rounded-md" />
        <span className="text-teal-200 text-lg font-light mb-5">
          Strong Roots Tree Service Website
        </span>
        <div className="flex flex-row justify-evenly space-x-4">
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-2 pr-2">
            Wordpress
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            HTML
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            CSS
          </span>
        </div>
      </div>

      {/* one changed */}
      <div
        onClick={() => window.open("https://www.onechangedlife.org/", "_blank")}
        className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-6 w-full cursor-pointer hover:scale-110 ease-in duration-200"
      >
        {/* Heading */}
        <img src={pic1} alt="" className="mb-4 w-full h-auto rounded-md" />
        <span className="text-teal-200 text-lg font-light mb-5">
          One Changed Life Organization Website
        </span>
        <div className="flex flex-row justify-evenly space-x-4">
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-2 pr-2">
            WordPress
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            HTML
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            CSS
          </span>
        </div>
      </div>

      {/* my portfolio */}
      <div
        onClick={() => {}}
        className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-6 w-full cursor-pointer hover:scale-110 ease-in duration-200"
      >
        {/* Heading */}
        <img src={pic3} alt="" className="mb-4 w-full h-auto rounded-md" />
        <span className="text-teal-200 text-lg font-light mb-5">
          My Portfolio
        </span>
        <div className="flex justify-evenly space-x-4">
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-2 pr-2">
            React JS
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            HTML
          </span>
        </div>
        <div className="flex justify-evenly pt-4 space-x-4">
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            Tailwind
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            CSS
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
