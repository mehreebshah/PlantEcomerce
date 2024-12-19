import frame1 from "../public/Frame 36.png";
import frame2 from "../public/Frame 37.png";
import frame3 from "../public/Frame 38.png";
import Image from "next/image";

function Categories() {
  return (
    <div className="w-full py-16">
      <div className="text-center font-serif font-bold text-3xl">Categories</div>
      <div className="text-center font-serif font-light mt-2 text-gray-600">
        Find what you are looking for
      </div>

      {/* Categories Grid */}
      <div className="bg-blue-200 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-10">
        {/* Natural Plants */}
        <div className="flex flex-col items-center text-center transition transform hover:scale-105 duration-300">
          <Image
            src={frame1}
            alt="Natural Plants"
            className="w-48 h-auto -mt-8"
          />
          <div className="font-bold text-lg mt-4">Natural Plants</div>
        </div>

        {/* Plant Accessories */}
        <div className="flex flex-col items-center text-center transition transform hover:scale-105 duration-300">
          <Image
            src={frame3}
            alt="Plant Accessories"
            className="w-48 h-auto mt-4"
          />
          <div className="font-bold text-lg mt-4">Plant Accessories</div>
          <div className="text-gray-700 text-sm mt-2">
            All types of plant accessories are available here.
          </div>
          <button className="mt-4 px-6 py-2 border-2 bg-blue-100 rounded-md hover:bg-blue-300 transition-transform transform hover:scale-105 duration-300">
            Explore
          </button>
        </div>

        {/* Artificial Plants */}
        <div className="flex flex-col items-center text-center transition transform hover:scale-105 duration-300">
          <Image
            src={frame2}
            alt="Artificial Plants"
            className="w-48 h-auto -mt-8"
          />
          <div className="font-bold text-lg mt-4">Artificial Plants</div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
