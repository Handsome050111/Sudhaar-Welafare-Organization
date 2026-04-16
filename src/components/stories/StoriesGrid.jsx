import StoryCard from './StoryCard';
import storiesData from '../../data/storiesData.json';

const StoriesGrid = () => {
  return (
    <section className="section bg-gray-50 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {storiesData.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesGrid;
