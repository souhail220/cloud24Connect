import { Monitor, Calculator, Building2, MessageSquare } from "lucide-react";
import {Navbar} from "../../shared/navbar/navbar.tsx";
import Footer from "../../shared/footer/footer.tsx";
import { SalesFormCard, type FormField } from "./components/SalesFormCard.tsx";
import { SalesInfoCard } from "./components/SalesInfoCard.tsx";

const ContactSales = () => {
    // Form configurations
    const demoFields: FormField[] = [
        { id: "demo-name", label: "Full Name", placeholder: "John Doe" },
        { id: "demo-email", label: "Work Email", type: "email", placeholder: "john@company.com" },
        { id: "demo-company", label: "Company", placeholder: "Company Inc." },
    ];

    const quoteFields: FormField[] = [
        { id: "quote-name", label: "Full Name", placeholder: "John Doe" },
        { id: "quote-email", label: "Work Email", type: "email", placeholder: "john@company.com" },
        { id: "quote-details", label: "Project Details", type: "textarea", placeholder: "Tell us about your project and requirements...", rows: 3 },
    ];

    const contactFields: FormField[] = [
        { id: "contact-name", label: "Full Name", placeholder: "John Doe" },
        { id: "contact-email", label: "Email", type: "email", placeholder: "john@company.com" },
        { id: "contact-message", label: "Message", type: "textarea", placeholder: "How can we help you?", rows: 3 },
    ];

    const enterpriseFeatures = [
        "Dedicated account management",
        "Custom SLA agreements",
        "Advanced security & compliance",
        "Priority 24/7 support",
        "Custom integrations",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-white dark:from-primary-dark dark:via-primary dark:to-primary-dark">
            {/* Header */}
            <Navbar />

            <main className="container mx-auto px-4 py-10 lg:py-20">
                {/* Hero Section */}
                <section className="py-16 px-4">
                    <div className="container mx-auto text-center max-w-3xl">
                        <h2 className="text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                            Let's Build Something
                            <br />
                            <span className="bg-gradient-to-r from-secondary via-blue-400 to-secondary-light bg-clip-text text-transparent">Great Together</span>
                        </h2>
                        <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">ad
                            Whether you're looking for a demo, need a custom quote, or want to explore enterprise solutions,
                            our team is here to help you succeed.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 px-4">
                    <div className="container mx-auto grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 max-w-6xl">
                        {/* Request Demo */}
                        <SalesFormCard
                            icon={Monitor}
                            title="Request a Demo"
                            description="See our platform in action with a personalized walkthrough tailored to your needs."
                            fields={demoFields}
                            buttonText="Schedule Demo"
                        />

                        {/* Get Quote */}
                        <SalesFormCard
                            icon={Calculator}
                            title="Get a Quote"
                            description="Receive a customized pricing proposal based on your specific requirements."
                            fields={quoteFields}
                            buttonText="Request Quote"
                        />

                        {/* Enterprise Solutions */}
                        <SalesInfoCard
                            icon={Building2}
                            title="Enterprise Solutions"
                            description="Scalable solutions designed for large organizations with advanced security and compliance needs."
                            features={enterpriseFeatures}
                            buttonText="Learn More"
                        />

                        {/* Contact Sales */}
                        <SalesFormCard
                            icon={MessageSquare}
                            title="Contact Sales"
                            description="Have questions? Our sales team is ready to assist you with any inquiries."
                            fields={contactFields}
                            buttonText="Send Message"
                        />
                    </div>
                    
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactSales;

