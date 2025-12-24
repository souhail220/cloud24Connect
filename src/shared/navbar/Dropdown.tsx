import type {DropdownItem} from "../../assets/data/navItems.ts";

interface Dropdown {
    items: DropdownItem[],
    onLinkClick: ((section: string) => void) | undefined
}

export const Dropdown = ({items, onLinkClick}: Dropdown) => {
    return (
        <div className="py-2 min-w-[250px] bg-blue-950/95 border border-secondary-light rounded-lg shadow-xl">
            {items.map((item) => (
                <button
                    key={item.title}
                    onClick={() => onLinkClick ? onLinkClick(item.link) : "/"}
                    className="w-full rounded-none flex items-start gap-3 px-4 py-3 hover:bg-primary transition-colors group"
                >
                    {item.icon && (
                        <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    )}
                    <div>
                        <p className="font-semibold text-sm text-start text-secondary group-hover:text-secondary-light transition-colors">
                            {item.title}
                        </p>
                        <p className="text-xs text-start text-white mt-0.5">
                            {item.description}
                        </p>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default Dropdown;