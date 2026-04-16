const DonationSection = () => (
  <section className="section bg-primary-light">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Support Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          Your small donation can save a life.
        </p>
      </div>

      <div className="max-w-2xl mx-auto card">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Donation Details
        </h3>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Easypaisa</span>
            <span className="text-gray-900 font-semibold text-lg">03459383419</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Bank</span>
            <span className="text-gray-900 font-semibold">UBL</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Account Number</span>
            <span className="text-gray-900 font-mono text-sm sm:text-base">PK05UNIL0109000267485862</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3">
            <span className="text-gray-600 font-medium">Account Title</span>
            <span className="text-gray-900 font-semibold">Adnan Ahmad</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DonationSection;
