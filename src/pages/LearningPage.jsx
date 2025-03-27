import React, { useState, useEffect } from 'react';
import ResourceHub from '../components/learning/ResourceHub';
import BlogArticles from '../components/learning/BlogArticles';
import VideoTutorials from '../components/learning/VideoTutorials';
import TaxGlossary from '../components/learning/TaxGlossary';

const LearningPage = () => {
  const [resources, setResources] = useState({
    articles: [],
    videos: [],
    glossary: []
  });

  useEffect(() => {
    const loadResources = async () => {
      // Fetch learning resources from an API or service
      const fetchedResources = {
        articles: [
          { id: 1, title: 'Tax Saving Tips', summary: 'Learn how to save on your taxes.', author: 'John Doe', readTime: '5', link: '#' },
          // Add more articles
        ],
        videos: [
          { id: 1, title: 'Understanding Tax Slabs', embedUrl: 'https://www.youtube.com/embed/xyz', description: 'A detailed video on tax slabs.' },
          // Add more videos
        ],
        glossary: [
          { id: 1, term: 'PAN', definition: 'Permanent Account Number', example: 'Example: ABCDE1234F' },
          // Add more glossary terms
        ]
      };
      setResources(fetchedResources);
    };

    loadResources();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ResourceHub />
      <h2 className="text-2xl font-bold mb-4">Blog Articles</h2>
      <BlogArticles articles={resources.articles} />
      <h2 className="text-2xl font-bold mb-4">Video Tutorials</h2>
      <VideoTutorials videos={resources.videos} />
      <h2 className="text-2xl font-bold mb-4">Tax Glossary</h2>
      <TaxGlossary glossary={resources.glossary} />
    </div>
  );
};

export default LearningPage;