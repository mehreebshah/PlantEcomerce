import banner from "../public/hero.png";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import frame1 from "../public/Frame 9.png";
import frame2 from "../public/Frame 7.png";
import frame3 from "../public/Frame 8.png";

function Hero() {
  return (
    <main>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center h-auto mx-4 lg:mx-20 rounded-2xl mt-10 bg-blue-200 p-6 lg:p-10">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-7xl font-serif text-center lg:text-left mt-4 lg:mt-10">
            Buy your dream Plants
          </h1>
          <h5 className="font-semibold text-2xl md:text-4xl lg:text-5xl mt-8 lg:mt-20 text-center lg:text-left">
            50+
          </h5>
          <p className="mt-2 text-sm md:text-md lg:text-lg text-center lg:text-left">
            Plant Species
          </p>
          <form className="w-full lg:w-[440px] relative">
            <div className="relative mt-6 lg:mt-12 mx-auto lg:ml-9">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="w-full p-4 rounded-full bg-blue-950 text-white placeholder-gray-300 focus:outline-none"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 p-4 bg-blue-600 rounded-full hover:bg-blue-700"
              >
                <MdSearch className="text-white" />
              </button>
            </div>
          </form>
        </div>

        {/* Right Content */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image
            src={banner}
            alt="banner"
            width={500}
            height={500}
            className="bg-black rounded-full"
          />
        </div>
      </div>

      {/* Best Selling Plants Section */}
      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center bg-transparent mt-16">
        {/* Text Section */}
        <div className="lg:w-1/3 text-center lg:text-left px-4">
          <h3 className="text-xl md:text-2xl font-semibold">Best Selling Plants</h3>
          <p className="mt-4 text-sm md:text-md">
            Easiest way to healthy life by <br /> buying your favorite plants
          </p>
          <button
            className="bg-blue-200 mt-5 px-6 py-3 rounded-md hover:bg-blue-300 hover:transition-transform hover:-translate-y-1 hover:scale-110 duration-300"
          >
            See More
          </button>
        </div>

        {/* Plant Cards */}
        <div className="flex sm:flex-col-1 md:flex-col-2 lg:flex-col-3 justify-center gap-6 lg:gap-8 mt-8 lg:mt-0 lg:w-2/3">
          <div className="rounded-lg shadow-md p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image src={frame1} alt="Natural Plants" />
            <h4 className="text-center mt-4">Natural Plants</h4>
            <p className="text-center">$1,400.00</p>
          </div>
          <div className="rounded-lg shadow-md p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image src={frame3} alt="Artificial Plants" />
            <h4 className="text-center mt-4">Artificial Plants</h4>
            <p className="text-center">$900.00</p>
          </div>
          <div className="rounded-lg shadow-md p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image src={frame2} alt="Artificial Plants" />
            <h4 className="text-center mt-4">Artificial Plants</h4>
            <p className="text-center">$350.00</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
