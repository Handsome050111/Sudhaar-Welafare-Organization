const ContactInfoList = () => {
  return (
    <section className="section bg-white pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="card flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <img src="/phone-call.png" alt="Phone" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
            <a href="tel:0572363615" className="text-gray-600 hover:text-primary transition-colors duration-200">
              0572363615
            </a>
          </div>

          {/* WhatsApp */}
          <div className="card flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <a href="https://wa.me/923162664019" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#25D366] transition-colors duration-200">
              03162664019
            </a>
          </div>

          {/* Email */}
          <div className="card flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <img src="/gmail.png" alt="Email" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:sudhaarwelfare.org@gmail.com" className="text-gray-600 hover:text-primary transition-colors duration-200">
              sudhaarwelfare.org@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="card flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <img src="/map.png" alt="Address Location" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Main GT Road opposite Gondal Maweshi Mandi, Attock, Punjab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoList;
