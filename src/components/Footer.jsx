import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Organization Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-1 rounded border border-gray-200 flex-shrink-0">
                <img src="/logo.jpeg" alt="Sudhaar Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
              <h3 className="font-bold text-lg leading-tight">Sudhaar Welfare Organization</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Drug Rehabilitation Center dedicated to helping individuals overcome addiction
              and rebuild their lives with dignity and purpose.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              CEO: Adnan Ahmad
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.facebook.com/share/1ECLtY4bvG/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <FaFacebookF size={14} />
                </div>
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@sudhaar_welfare_org?_r=1&_t=ZS-95JcAUh3L1h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-black transition-colors">
                  <FaTiktok size={14} />
                </div>
                TikTok
              </a>
              <a
                href="https://www.instagram.com/smartadnan47?igsh=MTU0MDhzcGNkNXQ4Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <FaInstagram size={16} />
                </div>
                Instagram
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <img src="/phone-call.png" alt="Phone" className="w-[18px] h-[18px] object-contain flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a href="tel:0572363615" className="text-sm hover:text-white transition-colors duration-200">
                    0572363615
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-[18px] h-[18px] object-contain flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">WhatsApp</p>
                  <a
                    href="https://wa.me/923162664019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    03162664019
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img src="/gmail.png" alt="Email" className="w-[18px] h-[18px] object-contain flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:sudhaarwelfare.org@gmail.com" className="text-sm hover:text-white transition-colors duration-200">
                    sudhaarwelfare.org@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img src="/map.png" alt="Address" className="w-[18px] h-[18px] object-contain flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-sm">
                    Main GT Road opposite Gondal Maweshi Mandi, Attock, Punjab, Pakistan
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Sudhaar Welfare Organization & Drug Rehabilitation Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
