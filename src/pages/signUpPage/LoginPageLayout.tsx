import { Navbar } from "../../shared/navbar/navbar";
import Footer from "../../shared/footer/footer";
import {LoginForm} from "./components/LoginForm.tsx";
import {useScrollAnimation} from "../../hooks/useScrollAnimation.ts";

const LoginPageLayout = () => {
    const {ref, isVisible} = useScrollAnimation(0.1);

    return (
        <div className="min-h-screen mt-16 bg-gradient-to-br from-primary-dark via-primary to-primary-dark flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="w-full max-w-md">
                    <div
                        ref={ref}
                        className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-cyan-500/20
                        transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                        `}>
                        <LoginForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default LoginPageLayout;
