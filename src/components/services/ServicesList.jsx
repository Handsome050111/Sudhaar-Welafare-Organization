import { CheckCircle } from 'lucide-react';
import servicesData from '../../data/servicesData.json';

const ServicesList = () => {
  return (
    <>
      {servicesData.map((service, index) => {
        const isEven = index % 2 !== 0; // Alternating layout

        return (
          <section key={service.id} className={`section ${isEven ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={isEven ? 'order-1 md:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary-light rounded-md flex items-center justify-center mb-6 overflow-hidden shadow-sm">
                    {service.imagePath ? (
                      <img src={service.imagePath} alt={service.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-primary font-bold">Img</div>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
                    {service.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-${isEven ? 'white' : 'gray-50'} rounded-lg p-8 ${isEven ? 'order-2 md:order-1' : ''}`}>
                  <div className="aspect-video bg-primary-light rounded-md flex items-center justify-center overflow-hidden shadow-md">
                    {service.photoPath ? (
                      <img src={service.photoPath} alt={`${service.title} Photo`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-primary opacity-50 font-medium text-center px-4">Ready for Real Photo<br/><span className="text-sm">Update photoPath in data</span></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ServicesList;
