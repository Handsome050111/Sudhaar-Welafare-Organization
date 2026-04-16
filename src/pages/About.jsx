import ImageCarousel from '../components/ImageCarousel';
import AboutIntroSection from '../components/about/AboutIntroSection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import CeoMessageSection from '../components/about/CeoMessageSection';

const About = () => {
  return (
    <div>
      <AboutIntroSection />
      <ImageCarousel />
      <MissionVisionSection />
      <CeoMessageSection />
    </div>
  );
};

export default About;
