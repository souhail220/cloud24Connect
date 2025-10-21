import "./navbar.css";
import {useState} from "react";
import Dropdown from "./Dropdown";

export const Navbar = () => {

    const [openDropdown, setOpenDropdown] = useState(0);

    const handleMouseEnter = (index: number) => setOpenDropdown(index);
    const handleMouseLeave = () => setOpenDropdown(0);

  return (
    <nav className="fixed top-0 left-0 w-full text-white z-50 navbar-container">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="../../assets/images/logoCloud24connect-removebg-preview.png" alt="Logo" className="h-8" />
          <span className="font-semibold text-lg">Cloud2Connect</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium nav-links">
            <li className="relative group" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                <a href="#" className="nav-link hover:text-orange-400">
                    Docs
                </a>
                    { (
                        <div className="dropdown fixed left-[10vw] bg-white text-black border border-gray-200 shadow-lg py-6 px-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <Dropdown />
                        </div>
                    )}
            </li>
            <li className="relative group" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                <a href="#" className="nav-link hover:text-orange-400">
                    Blog
                </a>
                <div>
                    {openDropdown === 2 && (
                        <div className="dropdown fixed left-[10vw] bg-white text-black border border-gray-200 shadow-lg py-6 px-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <Dropdown />
                        </div>
                    )}
                </div>
            </li>
            <li className="relative group" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                <a href="#" className="nav-link hover:text-orange-400">
                    Support
                </a>
                <div>
                    {openDropdown === 3 && (
                        <div className="dropdown fixed left-[10vw] bg-white text-black border border-gray-200 shadow-lg py-6 px-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <Dropdown />
                        </div>
                    )}
                </div>
            </li>
            <li className="relative group" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
                <a href="#" className="nav-link hover:text-orange-400">
                    Contact Sales
                </a>
                <div>
                    {openDropdown === 4 && (
                        <div className="dropdown fixed left-[10vw] bg-white text-black border border-gray-200 shadow-lg py-6 px-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <Dropdown />
                        </div>
                    )}
                </div>
            </li>
            <li className="relative group" onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
                <a href="#" className="nav-link hover:text-orange-400">
                    Products
                </a>
                <div>
                    {openDropdown === 5 && (
                        <div className="dropdown fixed left-[10vw] bg-white text-black border border-gray-200 shadow-lg py-6 px-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <Dropdown />
                        </div>
                    )}
                </div>
            </li>
            <li className="relative group" onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
                <a href="#" className="nav-link hover:text-orange-400">
                    Company
                </a>
                <div>
                    {openDropdown === 6 && (
                        <div className="dropdown fixed left-[10vw] bg-white text-black border border-gray-200 shadow-lg py-6 px-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <Dropdown />
                        </div>
                    )}
                </div>
            </li>
            <li className="relative group" onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>
                <a href="#" className="nav-link hover:text-orange-400">
                    Pricing
                </a>
                <div>
                    {openDropdown === 7 && (
                        <div className="dropdown fixed left-[10vw] bg-white text-black border border-gray-200 shadow-lg py-6 px-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            <Dropdown />
                        </div>
                    )}
                </div>
            </li>

           {/*Dropdown */}
          {/*<li className="relative group">*/}
          {/*  <button className="flex items-center gap-1 hover:text-blue-400">*/}
          {/*    Products <ChevronDown size={16} />*/}
          {/*  </button>*/}

          {/*  <div className="absolute top-full left-0 right-0 bg-white text-gray-800 shadow-lg py-6 px-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">*/}
          {/*    <ul className="grid grid-cols-3 gap-6 text-sm max-w-[1200px] mx-auto">*/}
          {/*      <li className="hover:text-blue-500 cursor-pointer">*/}
          {/*        Cloud Servers*/}
          {/*      </li>*/}
          {/*      <li className="hover:text-blue-500 cursor-pointer">*/}
          {/*        Cloud Desktop*/}
          {/*      </li>*/}
          {/*      <li className="hover:text-blue-500 cursor-pointer">*/}
          {/*        Virtual Private Cloud*/}
          {/*      </li>*/}
          {/*      <li className="hover:text-blue-500 cursor-pointer">Firewall</li>*/}
          {/*      <li className="hover:text-blue-500 cursor-pointer">*/}
          {/*        Load Balancers*/}
          {/*      </li>*/}
          {/*      <li className="hover:text-blue-500 cursor-pointer">*/}
          {/*        Block Storage*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a href="#" className="hover:text-blue-400">*/}
          {/*    Pricing*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button className="text-sm hover:border-blue-400 border-white rounded px-4 py-2">
            Log in
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

