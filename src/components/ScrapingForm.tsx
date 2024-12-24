import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface ScrapingFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

export function ScrapingForm({ onSubmit, isLoading }: ScrapingFormProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex gap-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL to scrape..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center gap-2"
        >
          {isLoading ? (
            'Scraping...'
          ) : (
            <>
              <Search size={20} />
              Scrape
            </>
          )}
        </button>
      </div>
    </form>
  );
}