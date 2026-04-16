import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section
    className="py-20 md:py-32 relative bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/hero image/hero-img.png')" }}
  >
    <div className="absolute inset-0 bg-gray-50/50 backdrop-blur-[1px]"></div>
    <div className="container-custom text-center relative z-10">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-4xl mx-auto">
        Drug addiction is not a crime — it is a cry for help.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Helping individuals recover and rebuild their lives with dignity
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact" className="btn btn-outline text-center bg-primary text-white hover:bg-primary-dark">
          Get In Touch
        </Link>
        <Link to="/services" className="btn hover:bg-primary hover:text-white border-2 border-primary text-center">
          Our Services
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
