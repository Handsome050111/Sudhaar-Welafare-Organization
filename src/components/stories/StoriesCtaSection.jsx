import { Link } from 'react-router-dom';

const StoriesCtaSection = () => (
  <section className="section bg-white border-t border-gray-100 py-16">
    <div className="container-custom text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Story Is Next</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Take the first step towards your new life today. We are here to guide you through every challenge.
      </p>
      <Link to="/contact" className="btn btn-primary inline-block shadow-lg hover:-translate-y-1 transition-transform px-8 py-3 text-lg">
        Start Your Journey
      </Link>
    </div>
  </section>
);

export default StoriesCtaSection;
