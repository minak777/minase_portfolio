import pic1 from "../assets/Onechanged.png";
//import pic2 from "../assets/zeweter.png";
import pic3 from "../assets/my.png";
import pic4 from "../assets/strongroot.png";
import pic5 from "../assets/dte.png";

function DesktopProjects() {
  return (
    <div className="h-auto w-full flex flex-col justify-start bg-gradient-to-r from-gray-950 to-gray-800 pt-28">
      <span
        id="projects"
        className="flex justify-center text-5xl font-thin text-white "
      ></span>

      {/* Desktop Version */}

      {/* Row 1 */}
      <div className="w-full flex-row justify-between items-center px-32 hidden md:flex">
        <div
          onClick={() =>
            window.open("https://www.dtestumpgrind.com/", "_blank")
          }
          className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-10 max-w-3xl w-full cursor-pointer hover:scale-110 ease-in duration-200"
        >
          {/* Heading */}
          <img src={pic5} alt="" className="mb-4 w-full h-auto rounded-md" />
          <span className="text-teal-200 text-lg font-light mb-5">
            DTE Stump Grinding Service Website
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

        {/* Strong roots */}
        <div
          onClick={() =>
            window.open("https://www.strongrootstree.com", "_blank")
          }
          className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-10 max-w-3xl w-full cursor-pointer hover:scale-110 ease-in duration-200"
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
      </div>

      {/*Row 2 */}
      <div className="w-full flex-row justify-start items-center px-32 hidden md:flex">
        <div
          onClick={() =>
            window.open("https://www.onechangedlife.org/", "_blank")
          }
          className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-10 max-w-3xl w-full cursor-pointer hover:scale-110 ease-in duration-200"
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
          className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-10 max-w-3xl w-full cursor-pointer hover:scale-110 ease-in duration-200"
        >
          {/* Heading */}
          <img src={pic3} alt="" className="mb-4 w-full h-auto rounded-md" />
          <span className="text-teal-200 text-lg font-light mb-5">
            My Portfolio
          </span>
          <div className="flex flex-row justify-evenly space-x-4">
            <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-2 pr-2">
              React JS
            </span>
            <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
              CSS
            </span>
            <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
              Tailwind
            </span>
            <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
              HTML
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopProjects;
