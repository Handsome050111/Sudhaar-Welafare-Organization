import React from 'react';

const GalleryCard = ({ item }) => (
  <div className="px-1.5 md:px-3 h-full pb-4">
    <div className="card overflow-hidden p-0 group shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="h-32 md:h-48 overflow-hidden bg-gray-200 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-3 md:p-5 flex-grow">
        <h3 className="font-bold text-sm md:text-lg text-gray-900 mb-1.5 border-b border-gray-100 pb-1.5">
          {item.title}
        </h3>
        <p className="text-gray-600 text-[11px] md:text-sm leading-snug">
          {item.content}
        </p>
      </div>
    </div>
  </div>
);

export default GalleryCard;
