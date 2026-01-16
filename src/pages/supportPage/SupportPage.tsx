import { HelpCircle, Users, MapPin, Search, BookOpen, MessageCircle, ExternalLink } from "lucide-react";
import {Navbar} from "../../shared/navbar/navbar.tsx";
import Footer from "../../shared/footer/footer.tsx";
import WorldMapSection from "./components/SupportMap.tsx";

const SupportPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-primary-dark dark:via-primary dark:to-primary-dark">
        {/* Header */}
            <Navbar />
            
            <main className="container mx-auto px-4 py-20 lg:py-32">
                {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto text-center max-w-3xl">
                    <h2 className="text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                        Support Center
                    </h2>
                    <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get the help you need. Browse our resources, connect with the community, or find us in person.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Help Center */}
                        <div className="bg-white dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 flex flex-col">
                            <div className="mb-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                                    <HelpCircle className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">Help Center</h3>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                                    Find answers to common questions and troubleshooting guides
                                </p>
                            </div>
                            <div className="space-y-4 flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                                    <input
                                        placeholder="Search help articles..."
                                        className="w-full pl-10 pr-4 py-2.5 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-200 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-gray-100 dark:bg-secondary-dark hover:bg-gray-200 dark:hover:bg-secondary transition-colors cursor-pointer group">
                                        <BookOpen className="w-5 h-5 text-primary dark:text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white truncate">Getting Started Guide</p>
                                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-200">Learn the basics</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-gray-100 dark:bg-secondary-dark hover:bg-gray-200 dark:hover:bg-secondary transition-colors cursor-pointer group">
                                        <BookOpen className="w-5 h-5 text-primary dark:text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white truncate">API Troubleshooting</p>
                                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-200">Common issues & fixes</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-gray-100 dark:bg-secondary-dark hover:bg-gray-200 dark:hover:bg-secondary transition-colors cursor-pointer group">
                                        <BookOpen className="w-5 h-5 text-primary dark:text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white truncate">Account & Billing</p>
                                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-200">Manage your subscription</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-6 px-4 md:px-6 py-2.5 md:py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2">
                                    Browse All Articles
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Community Forum */}
                        <div className="bg-white dark:bg-primary-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 flex flex-col">
                            <div className="mb-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">Community Forum</h3>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                                    Connect with other developers and share knowledge
                                </p>
                            </div>
                            <div className="space-y-4 flex-1">
                                <div className="space-y-3">
                                    <div className="p-3 md:p-4 rounded-lg bg-gray-100 dark:bg-secondary-dark hover:bg-gray-200 dark:hover:bg-secondary transition-colors cursor-pointer">
                                        <div className="flex items-center gap-2 mb-2">
                                            <MessageCircle className="w-4 h-4 text-primary dark:text-white" />
                                            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-200">Latest Discussion</span>
                                        </div>
                                        <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white mb-1">Best practices for API rate limiting</p>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-200">42 replies • 2 hours ago</p>
                                    </div>
                                    <div className="p-3 md:p-4 rounded-lg bg-gray-100 dark:bg-secondary-dark hover:bg-gray-200 dark:hover:bg-secondary transition-colors cursor-pointer">
                                        <div className="flex items-center gap-2 mb-2">
                                            <MessageCircle className="w-4 h-4 text-primary dark:text-white" />
                                            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-200">Popular Topic</span>
                                        </div>
                                        <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white mb-1">How to implement webhooks efficiently</p>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-200">128 replies • 1 day ago</p>
                                    </div>
                                    <div className="p-3 md:p-4 rounded-lg bg-gray-100 dark:bg-secondary-dark hover:bg-gray-200 dark:hover:bg-secondary transition-colors cursor-pointer">
                                        <div className="flex items-center gap-2 mb-2">
                                            <MessageCircle className="w-4 h-4 text-primary dark:text-white" />
                                            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-200">Announcement</span>
                                        </div>
                                        <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white mb-1">New SDK version released</p>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-200">56 replies • 3 days ago</p>
                                    </div>
                                </div>
                                <button className="w-full mt-6 px-4 md:px-6 py-2.5 md:py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2">
                                    Join the Community
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Map / Office Location */}
                    <div className="bg-gradient-to-br from-white to-white dark:from-primary dark:via-primary-dark dark:to-primary-light  border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 mt-6 md:mt-8">
                        <div className="mb-6">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-secondary dark:text-white mb-2">Find Us</h3>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                                Visit our offices or schedule an in-person meeting
                            </p>
                        </div>
                        <WorldMapSection/>
                    </div>
                </div>
            </section>
            </main>

            <Footer />
        </div>
    );
};

export default SupportPage;
