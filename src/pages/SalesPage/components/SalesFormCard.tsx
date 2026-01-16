import type { LucideIcon } from "lucide-react";
import type {FormEvent} from "react";

export interface FormField {
    id: string;
    label: string;
    type?: "text" | "email" | "textarea";
    placeholder: string;
    rows?: number;
}

interface SalesFormCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    fields: FormField[];
    buttonText: string;
    onSubmit?: () => void;
}

export const SalesFormCard = ({
    icon: Icon,
    title,
    description,
    fields,
    buttonText,
    onSubmit,
}: SalesFormCardProps) => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit?.();
    };

    return (
        <div className="bg-gradient-to-br from-white to-white dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 border border-border dark:border-primary rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 flex flex-col">
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 md:p-3 rounded-lg bg-transparent">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-secondary dark:text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl text-secondary dark:text-white font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                    {description}
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                {fields.map((field) => (
                    <div key={field.id} className="mb-8 space-y-2 flex flex-col flex-1 justify-start items-start">
                        <label htmlFor={field.id} className="text-sm dark:text-secondary text-primary font-medium text-foreground">
                            {field.label}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea
                                id={field.id}
                                placeholder={field.placeholder}
                                rows={field.rows || 3}
                                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-border bg-gray-100 text-gray-600 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                            />
                        ) : (
                            <input
                                id={field.id}
                                type={field.type || "text"}
                                placeholder={field.placeholder}
                                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-border bg-gray-100 text-gray-600 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        )}
                    </div>
                ))}
                <button type="submit"
                    className="w-full mt-6 px-4 md:px-6 py-2.5 md:py-3 text-white rounded-lg font-medium
                        bg-primary dark:bg-secondary hover:bg-primary/90 dark:hover:bg-secondary-light 
                        transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    {buttonText}
                </button>
            </form>
        </div>
    );
};
