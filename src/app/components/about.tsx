import { PiPottedPlantThin } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";

function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <h1 className="text-4xl font-bold mt-16 text-center">About us</h1>
      <p className="text-center mt-4 text-lg text-gray-700">
        Order now and appreciate the beauty of Nature
      </p>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <PiPottedPlantThin className="w-24 h-24 bg-blue-200 rounded-full p-4" />
          <div className="font-bold mt-4 text-lg">Large Assortment</div>
          <p className="mt-2 font-serif text-gray-600">
            We offer many different types of products with fewer variations in each category.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <CiDeliveryTruck className="w-24 h-24 bg-blue-200 rounded-full p-4" />
          <div className="font-bold mt-4 text-lg">Fast & Free Shipping</div>
          <p className="mt-2 font-serif text-gray-600">
            4-day or less delivery time, free shipping, and an expedited delivery option.
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <PiPhoneCallThin className="w-24 h-24 bg-blue-200 rounded-full p-4" />
          <div className="font-bold mt-4 text-lg">24/7 Support</div>
          <p className="mt-2 font-serif text-gray-600">
            Answers to any business-related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
