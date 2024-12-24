import React, { useState } from 'react';
import { ScrapingForm } from './components/ScrapingForm';
import { ScrapedDataDisplay } from './components/ScrapedDataDisplay';
import { ScrapingStatus } from './types';
import { scrapeWebsite } from './services/scraper';
import { Globe } from 'lucide-react';

function App() {
  const [status, setStatus] = useState<ScrapingStatus>({
    isLoading: false,
    error: null,
    data: null,
  });

  const handleScrape = async (url: string) => {
    setStatus({ isLoading: true, error: null, data: null });
    try {
      const data = await scrapeWebsite(url);
      setStatus({ isLoading: false, error: null, data });
    } catch (error) {
      setStatus({
        isLoading: false,
        error: 'Failed to scrape the website. Please try again.',
        data: null,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe size={40} className="text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Web Scraper</h1>
          </div>
          <p className="text-gray-600">
            Enter a website URL to extract its content and metadata
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <ScrapingForm onSubmit={handleScrape} isLoading={status.isLoading} />

          {status.error && (
            <div className="w-full max-w-2xl bg-red-50 text-red-600 p-4 rounded-lg">
              {status.error}
            </div>
          )}

          {status.data && <ScrapedDataDisplay data={status.data} />}
        </div>
      </div>
    </div>
  );
}

export default App;