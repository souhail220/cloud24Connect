import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-primary-dark dark:bg-transparent hover:bg-white/10 transition-all duration-300 group"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <Moon 
                    size={20} 
                    className="text-white group-hover:text-secondary-light transition-colors duration-300" 
                />
            ) : (
                <Sun 
                    size={20} 
                    className="text-white group-hover:text-secondary-light transition-colors duration-300" 
                />
            )}
        </button>
    );
};
