
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold">CHARELLE AUTO</span>
            </div>
            <p className="text-purple-100">
              Experience the future of automotive excellence with revolutionary design and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-purple-200 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-purple-200 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-purple-200 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-purple-200 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-purple-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/models" className="text-purple-200 hover:text-white transition-colors">Models</Link></li>
              <li><Link to="/about" className="text-purple-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-purple-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/schedule-test-drive" className="text-purple-200 hover:text-white transition-colors">Schedule Test Drive</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-purple-200">
              <li>New Car Sales</li>
              <li>Used Car Sales</li>
              <li>Car Financing</li>
              <li>Service & Maintenance</li>
              <li>Parts & Accessories</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-200" />
                <span className="text-purple-200">123 Auto Drive, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-200" />
                <span className="text-purple-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-200" />
                <span className="text-purple-200">info@charelleauto.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center">
          <p className="text-purple-200">
            &copy; 2025 Charelle Auto. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
