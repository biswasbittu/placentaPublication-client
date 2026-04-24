
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">প্লাসেন্টা পাবলিকেশন</h2>
          <p className="text-sm leading-relaxed">
            Helping you unlock your full potential with personalized coaching,
            mindset transformation, and life strategies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="p-2 bg-gray-800 rounded-full hover:bg-green-600 cursor-pointer transition">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-green-600 cursor-pointer transition">
              <FaTwitter />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-green-600 cursor-pointer transition">
              <FaInstagram />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-green-600 cursor-pointer transition">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Home</li>
            <li className="hover:text-green-500 cursor-pointer">About</li>
            <li className="hover:text-green-500 cursor-pointer">Services</li>
            <li className="hover:text-green-500 cursor-pointer">Blog</li>
            <li className="hover:text-green-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Life Coaching</li>
            <li className="hover:text-green-500 cursor-pointer">Career Growth</li>
            <li className="hover:text-green-500 cursor-pointer">Mindset Training</li>
            <li className="hover:text-green-500 cursor-pointer">Personal Branding</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Get latest updates and tips directly to your inbox.
          </p>

          <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-2 w-full outline-none text-sm"
            />
            <button className="bg-green-600 px-5 py-2 text-white hover:bg-green-700 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} LifeCoach. All rights reserved.
      </div>
    </footer>
    </div>
  );
}