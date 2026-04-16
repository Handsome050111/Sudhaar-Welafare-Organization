import { Quote } from 'lucide-react';

const CeoMessageSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Message from the CEO
          </h2>
          <div className="card border-l-4 border-l-primary">
            <Quote size={32} className="text-primary mb-4" />
            <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
              <p className="mb-4">
                At Sudhaar Welfare Organization & Drug Rehabilitation Center, we believe that every human being deserves a second chance, dignity, and hope.Our mission is rooted in compassion and responsibility towards those who are often neglected by society — including drug addicts, vulnerable individuals, widows, orphans, and the underprivileged. We are committed to providing not only shelter and medical treatment, but also psychological support, rehabilitation, and a path toward a better life.
              </p>
              <p className="mb-4">
                Drug addiction is not a crime; it is a silent cry for help. Through our dedicated efforts, we strive to rescue individuals from the streets, restore their health, rebuild their confidence, and reintegrate them into society as responsible citizens.
              </p>
              <p>
                Despite limited resources, our passion and commitment remain strong. However, this noble cause cannot move forward without the support of kind-hearted individuals and organizations. Your trust and contributions empower us to continue this life-changing mission.Together, we can bring hope where there is despair, light where there is darkness, and dignity where it has been lost.Thank you for believing in our vision.
              </p>
            </blockquote>
            <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary shadow-sm bg-gray-100">
                <img src="/ceo image/ceo-img.jpeg" alt="Adnan Ahmad - CEO" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xl mb-1">
                  Adnan Ahmad
                </p>
                <p className="text-gray-600 font-medium">
                  Chief Executive Officer
                </p>
                <p className="text-primary text-sm font-semibold mt-0.5">
                  Sudhaar Welfare Organization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessageSection;
