
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-airbnb-primary font-bold text-2xl">
            RentEasy
          </div>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow">
          <span className="font-medium text-sm mr-4">Anywhere</span>
          <span className="h-5 w-px bg-gray-300 mr-4"></span>
          <span className="font-medium text-sm mr-4">Any week</span>
          <span className="h-5 w-px bg-gray-300 mr-4"></span>
          <span className="text-gray-500 text-sm mr-2">Add guests</span>
          <div className="bg-airbnb-primary p-1.5 rounded-full text-white">
            <Search className="h-4 w-4" />
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">Become a Host</Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
