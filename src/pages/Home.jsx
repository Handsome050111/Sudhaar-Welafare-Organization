import HeroSection from '../components/home/HeroSection';
import AboutPreviewSection from '../components/home/AboutPreviewSection';
import ServicesSection from '../components/home/ServicesSection';
import GallerySection from '../components/home/GallerySection';
import CampaignVideoSection from '../components/home/CampaignVideoSection';
import DonationSection from '../components/home/DonationSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreviewSection />
      <ServicesSection />
      <GallerySection />
      <CampaignVideoSection />
      <DonationSection />
    </div>
  );
};

export default Home;
