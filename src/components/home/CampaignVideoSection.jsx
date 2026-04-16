import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CampaignVideoSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-gray-50 border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Message */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Real Impact, Real Action
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our CEO personally steps into communities — meeting individuals struggling with addiction, spreading awareness, and offering direct support on the ground. This is what authentic change looks like.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "- Active street-level outreach campaigns",
                "- Direct counselling and guidance sessions",
                "- Awareness drives across cities and towns",
                "- Connecting families with rehabilitation resources",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md w-fit"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right — Portrait Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              style={{ width: '50%', maxWidth: '340px' }}>
              <video
                ref={videoRef}
                controls
                muted
                playsInline
                loop
                className="w-full h-full object-cover"
                style={{ display: 'block', aspectRatio: '9/16' }}
              >
                <source src="/video/CEO video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampaignVideoSection;
