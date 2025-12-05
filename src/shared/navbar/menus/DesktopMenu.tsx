import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {NAV_ITEMS} from "../../../assets/data/navItems.ts";
import {Dropdown} from "../Dropdown.tsx";

export const DesktopMenu = () => {
    const [openDropdown, setOpenDropdown] = useState<number>(0);

    return (
        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
                <li key={item.id} className="relative group">
                    <button
                        className="flex items-center gap-1 px-4 py-2 rounded-md hover:text-secondary hover:bg-gray-800 transition-colors text-xs xl:text-md"
                        onMouseEnter={() => setOpenDropdown(item.id)}
                    >
                        {item.label}
                        <ChevronDown
                            size={16}
                            className={`transition-transform ${
                                openDropdown === item.id ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {openDropdown === item.id && (
                        <div
                            onMouseLeave={() => setOpenDropdown(0)}
                            className="absolute top-full -left-10 pt-2">
                            <div className="min-w-[250px] bg-blue-950/95 border border-secondary-light rounded-lg shadow-xl">
                                <Dropdown items={item.dropdownItems} />
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};
