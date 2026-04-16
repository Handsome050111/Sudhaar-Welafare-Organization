import { ArrowRight } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <div className="card shadow-xl hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center relative overflow-hidden bg-white rounded-xl border-t-4 border-t-primary">

      <div className="flex justify-center items-center gap-4 md:gap-6 mb-6 relative z-10 w-full">
        {/* Before */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-red-100 shadow-md relative group">
            <div className=""></div>
            <img src={story.imageBefore} alt={`${story.name} Before`} className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-gray-500 mt-2 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded-md">Before</span>
        </div>

        {/* Arrow separator */}
        <div className="text-gray-300 flex-shrink-0">
          <ArrowRight size={24} className="text-primary-light/50" />
        </div>

        {/* After */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary-light shadow-md z-20 relative">
            <img src={story.imageAfter} alt={`${story.name} After`} className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-primary mt-2 uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">After</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
      <p className="text-sm font-semibold text-primary mb-2">Age: {story.age}</p>
      <p className="text-sm font-semibold text-primary mb-6">From: {story.address}</p>
      <blockquote className="text-gray-800 font-medium italic mb-6 relative z-10">
        "{story.quote}"
      </blockquote>
      <p className="text-gray-600 leading-relaxed mx-auto max-w-lg relative z-10">
        {story.story}
      </p>
    </div>
  );
};

export default StoryCard;
