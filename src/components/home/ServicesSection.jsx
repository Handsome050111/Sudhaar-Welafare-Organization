import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import servicesData from '../../data/servicesData.json';

const ServicesSection = () => (
  <section className="section bg-gray-50">
    <div className="container-custom">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {servicesData.slice(0, 3).map((service) => {
          return (
            <div key={service.id} className="card border-t-4 border-t-primary h-full flex flex-col hover:shadow-md transition-shadow duration-200">
              <div className="w-14 h-14 bg-primary-light rounded-md flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                {service.imagePath ? (
                  <img src={service.imagePath} alt={service.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-primary font-bold">Img</div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {service.description[0]}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 md:mt-12 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors shadow-sm"
        >
          View More Services
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
