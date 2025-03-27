import React from 'react';

const BlogArticles = ({ articles }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map(article => (
        <div key={article.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold">{article.title}</h3>
          <p className="text-gray-600 mt-2">{article.summary}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">
              {article.author} | {article.readTime} min read
            </span>
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogArticles;