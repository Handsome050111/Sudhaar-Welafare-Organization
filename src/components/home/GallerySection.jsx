import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GalleryCard from '../GalleryCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const galleryData = [
  {
    id: 1,
    title: "Community Outreach",
    content: "Reaching out to the vulnerable to provide essential care, food, and guidance.",
    image: "/services images/service-img-8.jpeg"
  },
  {
    id: 2,
    title: "Rehabilitation Center",
    content: "A safe environment with professional counseling and group therapy sessions.",
    image: "/hero image/hero-img.png"
  },
  {
    id: 3,
    title: "Free Medical Camps",
    content: "Hosting routine medical camps to support the underprivileged and addicts.",
    image: "/services images/service-img-9.jpeg"
  },
  {
    id: 4,
    title: "Youth Welfare",
    content: "Empowering the next generation through guidance, education, and skill-building.",
    image: "/services images/service-img-4.jpeg"
  },
  {
    id: 5,
    title: "Disabled Support",
    content: "Providing essential care, physical therapy, and opportunities for the disabled.",
    image: "/services images/service-img-2.jpeg"
  },
  {
    id: 6,
    title: "Educational Help",
    content: "Funding and organizing educational workshops to spread awareness and learning.",
    image: "/services images/service-img-10.jpeg"
  }
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-5 md:-left-12 top-[35%] md:top-[40%] -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors"
    aria-label="Previous"
  >
    <ChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-5 md:-right-12 top-[35%] md:top-[40%] -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors"
    aria-label="Next"
  >
    <ChevronRight size={24} />
  </button>
);

const GallerySection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className="section bg-white border-t border-gray-100 overflow-hidden">
      <div className="container-custom relative">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Glimpses of Our Organization
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A look at our ongoing efforts, rehabilitation activities, and community outreach.
          </p>
        </div>

        <div className="px-2 md:px-16 pb-8">
          <Slider {...sliderSettings}>
            {galleryData.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
