const MissionVisionSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission */}
          <div className="card">
            <div className="w-16 h-16 mb-4">
              <img src="/mission-icon.jpg" alt="Mission" className="w-full h-full object-cover rounded-md shadow-sm" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To provide accessible, compassionate support for individuals struggling with drug
              addiction and help them rebuild their lives. We strive to create an environment where
              every person receives the care, respect, and guidance they need to overcome addiction
              and achieve lasting recovery.
            </p>
          </div>

          {/* Vision */}
          <div className="card">
            <div className="w-16 h-16 mb-4">
              <img src="/vision-icon.png" alt="Vision" className="w-full h-full object-cover rounded-md shadow-sm" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A society where every individual has the opportunity to overcome addiction and live
              with dignity and purpose. We envision communities that are informed, supportive, and
              free from the devastating effects of drug abuse, where recovery is celebrated and
              second chances are embraced.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
