import React from 'react';

const TaxGlossary = ({ glossary }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {glossary.map(term => (
        <div key={term.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold">{term.term}</h3>
          <p className="text-gray-600 mt-2">{term.definition}</p>
          {term.example && (
            <div className="mt-2 p-2 bg-gray-100 rounded">
              <strong>Example:</strong> {term.example}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaxGlossary;