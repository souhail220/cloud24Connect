import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import {type Language, LANGUAGES} from "../../assets/data/navItems.ts";

export const LanguageSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);

    const handleLanguageChange = (language: Language) => {
        setSelectedLanguage(language);
        setIsLanguageOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleLanguageDropdown}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm"
            >
                <Globe color="#f97316" size={18} />
                <span>{selectedLanguage.flag}</span>
                <span>{selectedLanguage.code.toUpperCase()}</span>
                <ChevronDown
                    size={14}
                    className={`transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isLanguageOpen && (
                <button
                    onMouseLeave={toggleLanguageDropdown}
                    className="absolute top-full -right-8 mt-2 w-48 bg-white text-black border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                    {LANGUAGES.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language)}
                            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-left ${
                                selectedLanguage.code === language.code
                                    ? "bg-blue-50 text-secondary-light"
                                    : ""
                            }`}
                        >
                            <span className="text-xl">{language.flag}</span>
                            <span className="text-sm font-medium">{language.name}</span>
                        </button>
                    ))}
                </button>
            )}
        </div>
    );
};
