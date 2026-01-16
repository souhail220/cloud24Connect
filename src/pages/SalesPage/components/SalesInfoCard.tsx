import type { LucideIcon } from "lucide-react";

interface SalesInfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    onButtonClick?: () => void;
}

export const SalesInfoCard = ({
    icon: Icon,
    title,
    description,
    features,
    buttonText,
    onButtonClick,
}: SalesInfoCardProps) => {
    return (
        <div className="bg-gradient-to-br from-white to-white dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 border border-border dark:border-primary
            rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 flex flex-col"
        >
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 md:p-3 rounded-lg bg-transparent">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-secondary dark:text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-secondary dark:text-white">{title}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                    {description}
                </p>
            </div>
            <div className="space-y-6 flex-1">
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-secondary flex-shrink-0"></span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={onButtonClick}
                    className="w-full mt-auto px-4 md:px-6 py-2.5 md:py-3 bg-secondary text-primary-foreground rounded-lg font-medium hover:bg-secondary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};
