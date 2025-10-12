import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="w-full h-full mt-16 py-16 text-center hero-container">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
        Fast,Secure and Reliable Cloud Services
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
        Empowering businesses with scalable, secure, and innovative cloud
        solutions.
      </p>
    </div>
  );
}
