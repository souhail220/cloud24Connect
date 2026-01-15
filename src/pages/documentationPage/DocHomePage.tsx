import { Link } from "react-router-dom";
import { Book, Code, ArrowRight } from "lucide-react";
import {Navbar} from "../../shared/navbar/navbar.tsx";
import Footer from "../../shared/footer/footer.tsx";

const DocHomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-white dark:from-primary-dark dark:via-primary dark:to-primary-dark">
            <Navbar />

            {/* Hero */}
            <main className="container mx-auto px-4 py-20 lg:py-32">
                {/* Title */}
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                        Learn How to Build faster
                        <br/>
                        <span className="bg-gradient-to-r from-secondary via-blue-400 to-secondary-light bg-clip-text text-transparent"> with our platform</span>
                    </h1>
                    <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">A powerful API and intuitive tools to help you build, deploy, and scale your applications with ease.</p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/docs">
                            <button
                                className="text-lg p-4 gap-2 flex justify-center items-center transition-all duration-300
                                    ease-in-out translate-y-0 hover:-translate-y-1 bg-gradient-to-br from-primary to-primary-light
                                    dark:from-secondary dark:to-secondary-light text-white"
                            >
                                <Book className="h-4 w-4" />
                                Read the Docs
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-24 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Link to="/docs#quick-setup"
                        className="bg-gradient-to-br from-[#fc9249] to-[#f59e0b] dark:from-transparent dark:to-transparent
                        group p-6 rounded-lg border border-border bg-card hover:border-muted-foreground/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-md bg-muted">
                                <Book className="text-gray-100 dark:text-secondary h-5 w-5 text-foreground" />
                            </div>
                            <h3 className="text-lg text-gray-100 dark:text-secondary font-semibold text-foreground">Getting Started</h3>
                        </div>
                        <p className="text-muted-foreground dark:text-gray-100 text-gray-800 text-sm">
                            Learn how to set up your development environment and get your first project running in minutes.
                        </p>
                        <span
                            className="text-white hover:text-primary-light dark:hover:text-secondary-light hover:underline inline-flex items-center
                                gap-1 mt-4 text-sm font-medium text-foreground group-hover:gap-2 transition-all"
                        >
                            Learn more <ArrowRight className="h-4 w-4" />
                        </span>
                    </Link>

                    <Link to="/docs#authentication"
                        className="bg-gradient-to-br from-[#fc9249] to-[#f59e0b] dark:from-transparent dark:to-transparent
                        group p-6 rounded-lg border border-border bg-card hover:border-muted-foreground/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-md bg-muted">
                                <Code className="text-gray-100 dark:text-secondary h-5 w-5 text-foreground" />
                            </div>
                            <h3 className="text-gray-100 dark:text-secondary text-lg font-semibold text-foreground">API Reference</h3>
                        </div>
                        <p className="dark:text-gray-100 text-gray-800 text-muted-foreground text-sm">
                            Explore our REST API with detailed examples for authentication, users, and project management.
                        </p>
                        <span
                            className="text-white hover:text-primary-light dark:hover:text-secondary-light hover:underline inline-flex items-center gap-1
                                mt-4 text-sm font-medium text-foreground group-hover:gap-2 transition-all"
                        >
                            View endpoints <ArrowRight className="h-4 w-4" />
                        </span>
                    </Link>

                    <Link to="/docs#quick-setup"
                          className="bg-gradient-to-br from-[#fc9249] to-[#f59e0b] dark:from-transparent dark:to-transparent
                          group p-6 rounded-lg border border-border bg-card hover:border-muted-foreground/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-md bg-muted">
                                <Book className="text-gray-100 dark:text-secondary h-5 w-5 text-foreground" />
                            </div>
                            <h3 className="text-lg text-gray-100 dark:text-secondary font-semibold text-foreground">Tutorials</h3>
                        </div>
                        <p className="text-muted-foreground dark:text-gray-100 text-gray-800 text-sm">
                            Step-by-step tutorials to help you learn the fundamentals and get started quickly with your projects.
                        </p>
                        <span
                            className="text-white hover:text-primary-light dark:hover:text-secondary-light hover:underline inline-flex items-center
                                gap-1 mt-4 text-sm font-medium text-foreground group-hover:gap-2 transition-all"
                        >
                            Learn more <ArrowRight className="h-4 w-4" />
                        </span>
                    </Link>

                    <Link to="/docs#authentication"
                          className="bg-gradient-to-br from-[#fc9249] to-[#f59e0b] dark:from-transparent dark:to-transparent
                          group p-6 rounded-lg border border-border hover:border-muted-foreground/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-md bg-muted">
                                <Code className="text-gray-100 dark:text-secondary h-5 w-5 text-foreground" />
                            </div>
                            <h3 className="text-gray-100 dark:text-secondary text-lg font-semibold text-foreground">Best Practices</h3>
                        </div>
                        <p className="dark:text-gray-100 text-gray-800 text-muted-foreground text-sm">
                            Detailed best practices for working with our API, including authentication, user management, and project workflows.
                        </p>
                        <span
                            className="text-white hover:text-primary-light dark:hover:text-secondary-light hover:underline
                                inline-flex items-center gap-1 mt-4 text-sm font-medium text-foreground group-hover:gap-2 transition-all"
                        >
                            View endpoints <ArrowRight className="h-4 w-4" />
                        </span>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DocHomePage;
