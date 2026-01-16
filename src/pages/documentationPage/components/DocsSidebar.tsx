import { Book, Code, ChevronRight } from "lucide-react";

interface NavItem {
    id: string;
    label: string;
    children?: { id: string; label: string }[];
}

interface DocsSidebarProps {
    activeSection: string;
    onNavigate: (id: string) => void;
}

const navItems: NavItem[] = [
    {
        id: "getting-started",
        label: "Getting Started",
        children: [
            { id: "quick-setup", label: "Quick Setup" },
            { id: "installation", label: "Installation Guide" },
        ],
    },
    {
        id: "api-references",
        label: "API References",
        children: [
            { id: "authentication", label: "Authentication" },
            { id: "users", label: "Users" },
            { id: "projects", label: "Projects" },
        ],
    },
];

const DocsSidebar = ({ activeSection, onNavigate }: DocsSidebarProps) => {
    const getIcon = (id: string) => {
        switch (id) {
            case "getting-started":
                return <Book className="h-4 w-4" />;
            case "api-references":
                return <Code className="h-4 w-4" />;
            default:
                return null;
        }
    };

    return (
        <nav className="space-y-6">
            {navItems.map((item) => (
                <div key={item.id}>
                    <button
                        onClick={() => onNavigate(item.id)}
                        className={`flex items-center gap-2 text-sm font-medium transition-colors w-full text-left mb-2
                            ${activeSection === item.id || item.children?.some(c => c.id === activeSection)
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"}`}
                    >
                        {getIcon(item.id)}
                        {item.label}
                    </button>
                    {item.children && (
                        <div className="ml-6 space-y-1 border-l border-border pl-4">
                            {item.children.map((child) => (
                                <button
                                    key={child.id}
                                    onClick={() => onNavigate(child.id)}
                                    className={`flex items-center gap-2 text-sm transition-colors w-full text-left py-1.5
                                        ${activeSection === child.id
                                            ? "text-foreground font-medium"
                                            : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    {activeSection === child.id && (
                                        <ChevronRight className="h-3 w-3" />
                                    )}
                                    <span className={activeSection === child.id ? "" : "ml-5"}>{child.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default DocsSidebar;
