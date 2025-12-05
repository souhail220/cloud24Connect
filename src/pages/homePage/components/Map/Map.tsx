import React from "react";
import AnimatedList from './animatedlist'

const items = ['🇺🇸 Washington', '🇩🇪 Frankfurt','🇫🇷 Paris', '🇹🇷 Istanbul', '🇦🇪 Dubai', '🇸🇦 Riyadh', '🇹🇭 Bangkok', '🇭🇰 Hong Kong', '🇰🇷 Seoul', '🇸🇬 Signapore']; 
export default function WorldMapSection() {
  return (
    
    <section className="map w-full flex flex-col lg:flex-row justify-center items-center gap-12 p-10 bg-gradient-to-br from-primary via-primary-dark to-primary">
      {/*<h2 className="text-3xl font-semibold text-white text-center mb-6">Cloud Data Centers Coverage</h2>*/}
      
      {/* Left list */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <AnimatedList
            items={items}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={false}
            enableArrowNavigation={false}
            displayScrollbar={false}
        />
      </div>

      {/* Map */}
      <div className="relative w-full max-w-3xl">
        {/* Background world map */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World map"
          className="w-full opacity-60"
        />

        {/* Location markers (add or remove as needed) */}
        <span className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse"
          style={{ top: "30%", left: "22%" }}
        ></span>

        <span className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse"
          style={{ top: "40%", left: "55%" }}
        ></span>

        <span className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse"
          style={{ top: "37%", left: "75%" }}
        ></span>
        <span className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse"
          style={{ top: "67%", left: "87%" }}
        ></span>
        <span className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse"
          style={{ top: "27%", left: "50%" }}
        ></span>
        <span className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse"
          style={{ top: "32%", left: "65%" }}
        ></span>
        <span className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse"
          style={{ top: "34%", left: "59%" }}
        ></span>
      </div>
    </section>
  );
}
