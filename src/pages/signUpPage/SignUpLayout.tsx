import Footer from "../../shared/footer/footer.tsx";
import {Navbar} from "../../shared/navbar/navbar.tsx";
import {SignUpForm} from "./components/SignUpForm.tsx";
import {useScrollAnimation} from "../../hooks/useScrollAnimation.ts";

const SignUpLayout = () => {
    const {ref, isVisible} = useScrollAnimation(0.1);

    return (
        <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-primary-dark dark:via-primary dark:to-primary-dark flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="w-full xl:max-w-3xl lg:max-w-xl max-w-md">
                    <div
                        ref={ref}
                        className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-cyan-500/20
                        transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                        `}>
                        <SignUpForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default SignUpLayout;
