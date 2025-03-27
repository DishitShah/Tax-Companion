import React, { useState, useEffect } from 'react';
import { fetchLearningResources } from '../../services/learningService';

const ResourceHub = () => {
  const [resources, setResources] = useState({
    articles: [],
    videos: [],
    glossary: []
  });

  const [activeTab, setActiveTab] = useState('articles');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadResources = async () => {
      try {
        const fetchedResources = await fetchLearningResources();
        setResources(fetchedResources);
      } catch (error) {
        console.error('Failed to fetch learning resources', error);
      }
    };

    loadResources();
  }, []);

  const filteredResources = resources[activeTab].filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.tags?.some(tag => 
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const renderResourceCard = (resource) => {
    switch(activeTab) {
      case 'articles':
        return (
          <div key={resource.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold">{resource.title}</h3>
            <p className="text-gray-600 mt-2">{resource.summary}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">
                {resource.author} | {resource.readTime} min read
              </span>
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        );
      
      case 'videos':
        return (
          <div key={resource.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={resource.embedUrl} 
                title={resource.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{resource.title}</h3>
            <p className="text-gray-600 mt-2">{resource.description}</p>
          </div>
        );
      
      case 'glossary':
        return (
          <div key={resource.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold">{resource.term}</h3>
            <p className="text-gray-600 mt-2">{resource.definition}</p>
            {resource.example && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <strong>Example:</strong> {resource.example}
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Tax Learning Resources</h2>
      
      <div className="mb-6">
        <input 
          type="text"
          placeholder={`Search ${activeTab}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      
      <div className="flex mb-6">
        {['articles', 'videos', 'glossary'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 mr-2 rounded-md 
              ${activeTab === tab 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'}
            `}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.length > 0 ? (
          filteredResources.map(renderResourceCard)
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No resources found
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceHub;