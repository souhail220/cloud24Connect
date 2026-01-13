import {useState} from "react";
import {Link} from 'react-router-dom';
import logoLight from "../../assets/images/cloud24Logo-white.png";
import logoDark from "../../assets/images/cloud24connect-dark.png";
import {Menu, X} from "lucide-react";
import {DesktopMenu} from "./menus/DesktopMenu.tsx";
import {MobileMenu} from "./menus/MobileMenu.tsx";
import {LanguageSwitcher} from "../languageSwitcher/LanguageSwitcher.tsx";
import {ThemeToggle} from "../ThemeToggle/ThemeToggle.tsx";
import { useTheme } from "../../context/ThemeContext.tsx";

interface NavbarProps {
    onLinkClick?: (section: string) => void;
}

export const Navbar = ({onLinkClick}: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-white to-gray-50 dark:from-primary-dark dark:to-primary text-gray-800 dark:text-white z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    {theme === 'light' ? (
                        <img src={logoDark} alt="Cloud24Connect Logo" className="h-12 w-18"/>
                    ) : (
                        <img src={logoLight} alt="Cloud24Connect Logo" className="h-12 w-18"/>
                    )}
                </Link>

                {/* Desktop Navigation */}
                <DesktopMenu onLinkClick={onLinkClick} />

                {/* Desktop Actions */}
                <div className="flex items-center gap-3">
                    <Link to="/login"
                          className="text-sm border border-secondary-dark dark:border-transparent text-secondary-dark dark:text-white hover:text-secondary-light dark:hover:text-gray-300 hover:border-secondary-light rounded-md px-4 py-2 transition-colors">
                        Sign In
                    </Link>
                    <Link to="/signup"
                          className="bg-secondary-dark hover:bg-secondary text-white hover:text-gray-200 text-sm px-4 py-2 rounded-md transition-colors shadow-md">
                        Sign Up
                    </Link>
                </div>

                <div className="flex">
                    {/* Language Switcher */}
                    <LanguageSwitcher/>

                    {/* Theme Toggle */}
                    <ThemeToggle/>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={toggleMobileMenu}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Menu Navigation */}
            <MobileMenu onLinkClick={onLinkClick} isOpen={isMobileMenuOpen}/>
        </nav>
    );
};
