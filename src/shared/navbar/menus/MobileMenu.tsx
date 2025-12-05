import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "../../../assets/data/navItems.ts";
import { Dropdown } from "../Dropdown";

export const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
    const [openDropdown, setOpenDropdown] = useState<number>(0);

    if (!isOpen) return null;

    return (
        <div className="lg:hidden border-t border-primary-light">
            <div className="px-6 py-4">
                <ul className="flex flex-col gap-2 text-sm font-medium">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id}>
                            <button onClick={() => setOpenDropdown(openDropdown === item.id ? 0 : item.id)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-md hover:bg-primary-dark hover:text-orange-400 transition-colors text-left"
                            >
                                {item.label}
                                <ChevronDown size={16} className={`transition-transform ${openDropdown === item.id ? "rotate-180" : ""}`}/>
                            </button>

                            {openDropdown === item.id && (
                                <div className="w-full mt-2 ml-4 border-l border-cyan-500/50 pl-3 animate-in fade-in slide-in-from-top-1 duration-200">
                                    <Dropdown items={item.dropdownItems} />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
