
import React from "react";
import { Heart, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-airbnb-light py-12 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">Safety information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">Cancellation options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">COVID-19 Response</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">Disaster relief</a></li>
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">Support hosts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">Combating discrimination</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hosting</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">Try hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">Explore hosting resources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">Visit our community forum</a></li>
              <li><a href="#" className="text-gray-600 hover:text-airbnb-primary">How to host responsibly</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5 text-airbnb-primary" />
                <span>info@renteasy.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-5 w-5 text-airbnb-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2023 RentEasy, Inc.</p>
            <span className="text-gray-400">·</span>
            <a href="#" className="text-sm text-gray-600 hover:text-airbnb-primary">Privacy</a>
            <span className="text-gray-400">·</span>
            <a href="#" className="text-sm text-gray-600 hover:text-airbnb-primary">Terms</a>
            <span className="text-gray-400">·</span>
            <a href="#" className="text-sm text-gray-600 hover:text-airbnb-primary">Sitemap</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Made with</span>
            <Heart className="h-4 w-4 text-airbnb-primary fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
