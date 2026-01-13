import {useState} from "react";
import {ChevronDown} from "lucide-react";
import {NAV_ITEMS} from "../../../assets/data/navItems.ts";
import {Dropdown} from "../Dropdown.tsx";
import {Link} from "react-router-dom";

interface DesktopMenuProps {
    onLinkClick: ((section: string) => void) | undefined
}

export const DesktopMenu = ({onLinkClick}: DesktopMenuProps) => {
    const [openDropdown, setOpenDropdown] = useState<number>(0);

    return (
        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
                <Link to={item.link} key={item.id} className="relative group">
                    <button
                        className="flex items-center gap-1 px-4 py-2 rounded-md group-hover:text-secondary dark:hover:bg-gray-800 transition-colors text-xs xl:text-md"
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

                    {openDropdown === item.id && (item.dropdownItems?.length ?? 0) > 0 && item.dropdownItems && (
                        <button onMouseLeave={() => setOpenDropdown(0)} className="absolute top-full -left-10">
                            <Dropdown onLinkClick={onLinkClick} items={item.dropdownItems}/>
                        </button>
                    )}
                </Link>
            ))}
        </ul>
    );
};
