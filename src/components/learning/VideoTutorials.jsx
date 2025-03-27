import React from 'react';

const VideoTutorials = ({ videos }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map(video => (
        <div key={video.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src={video.embedUrl} 
              title={video.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">{video.title}</h3>
          <p className="text-gray-600 mt-2">{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoTutorials;