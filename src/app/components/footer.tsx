import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-blue-200 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* GREEMIND Branding */}
        <div className="text-2xl font-bold font-serif uppercase text-black">
          GREEMIND
        </div>
        <p className="text-gray-600 mt-2">
          We help you Find
          <br />
          your dream plant
        </p>

        {/* Footer Table */}
        <div className="mt-12">
          <table className="w-full table-fixed text-center md:text-left">
            <thead>
              <tr className="text-black font-bold">
                <th>Information</th>
                <th>Company</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-2">About</td>
                <td className="border border-blue-200 p-2">Community</td>
                <td className="border border-blue-200 p-2">Getting Started</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-2">Product</td>
                <td className="border border-blue-200 p-2">Career</td>
                <td className="border border-blue-200 p-2">Pricing</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-2">Blog</td>
                <td className="border border-blue-200 p-2">Our Story</td>
                <td className="border border-blue-200 p-2">Resources</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <CiFacebook className="text-3xl text-gray-600 hover:text-blue-600 transition-colors" />
          <CiTwitter className="text-3xl text-gray-600 hover:text-blue-400 transition-colors" />
          <FaInstagram className="text-3xl text-gray-600 hover:text-pink-500 transition-colors" />
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-center text-gray-600">
          2024 All Rights Reserved | Terms of Use | GREEMIND
        </p>
      </div>
    </div>
  );
}

export default Footer;
