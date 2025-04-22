
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Find your perfect getaway
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
          Discover unique places to stay and unforgettable experiences around the world.
        </p>
        
        {/* Search Box */}
        <div className="bg-white rounded-xl p-4 w-full max-w-4xl shadow-lg animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1 text-left">Where</label>
              <input 
                type="text" 
                placeholder="Search destinations" 
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb-primary focus:border-airbnb-primary text-gray-800"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1 text-left">When</label>
              <input 
                type="text" 
                placeholder="Add dates" 
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb-primary focus:border-airbnb-primary text-gray-800"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1 text-left">Who</label>
              <input 
                type="text" 
                placeholder="Add guests" 
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb-primary focus:border-airbnb-primary text-gray-800"
              />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
