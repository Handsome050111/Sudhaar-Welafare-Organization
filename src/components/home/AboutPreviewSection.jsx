import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutData from '../../data/aboutData.json';

const AboutPreviewSection = () => (
  <section className="section bg-white">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          About Sudhaar
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          {aboutData.intro[0]}
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
        >
          Learn More About Us
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default AboutPreviewSection;
