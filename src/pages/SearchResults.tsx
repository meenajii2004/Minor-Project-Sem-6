import React from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../store';
import type { SearchFilters } from '../types';

interface LocationState {
  filters?: Partial<SearchFilters>;
  aiQuery?: string;
}

const SearchResults = () => {
  const location = useLocation();
  const { filters, aiQuery } = (location.state as LocationState) || {};
  const searchResults = useStore((state) => state.searchResults);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {aiQuery 
            ? `Search results for "${aiQuery}"`
            : `Hotels in ${filters?.location || 'All Locations'}`
          }
        </h1>
        
        {/* Temporary placeholder for search results */}
        <div className="text-gray-600">
          {searchResults.length === 0 ? (
            <p>No results found. Try adjusting your search criteria.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {searchResults.map((hotel) => (
                <div key={hotel.id} className="border rounded-lg p-4">
                  <h2 className="text-xl font-semibold">{hotel.name}</h2>
                  <p>{hotel.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;