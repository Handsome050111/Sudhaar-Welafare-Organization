import aboutData from '../../data/aboutData.json';

const AboutIntroSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            About Sudhaar Welfare Organization
          </h1>
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
            {aboutData.intro.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
